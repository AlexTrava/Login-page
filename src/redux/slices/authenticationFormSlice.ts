import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import type { DocumentData, UserInfo } from '@/types';
import errorHandler from '@/utils/errorsHandler';

import type RootState from '../store';

type formTypes = {
  stepForm: string;
  currentUserFetch: UserInfo[] | void;
  status: string;
  isTaken: boolean | void;
};

export const handlerVerifyCode = createAsyncThunk<
  UserInfo[] | void,
  undefined,
  { rejectValue: string; state: RootState }
>('firestore/handlerVerifyCode', async (_, { rejectWithValue, dispatch, getState }) => {
  try {
    const smsCode = getState().curentUserSlice.smsCode;
    const fetchCaptcha = getState().authSlice.captchaFetch;
    if (!smsCode) {
      errorHandler(smsCode, 'Error smsCode');
      return;
    }
    await fetchCaptcha.confirm(smsCode);
    const currentUserUid = auth.currentUser?.uid;

    const collectionRef = collection(db, 'users');
    const docsQuery = query(collectionRef, where('uid', '==', currentUserUid));
    const querySnapshot = await getDocs(docsQuery);

    if (querySnapshot.empty) {
      dispatch(setCurrentStepForm('nick'));
      return;
    }
    const user: UserInfo[] = [];
    querySnapshot.forEach((doc: DocumentData) => {
      user.push(doc.data());
    });
    const [{ displayName }] = user;
    if (displayName) {
      dispatch(setCurrentStepForm('auth'));
    }

    return user;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
  }
});

export const handlerNicknameInput = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string; state: RootState }
>(
  'firestore/handlerNicknameInput',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const currentDisplayName = getState().curentUserSlice.displayName;
      const currentUser = auth.currentUser;

      const collectionRef = collection(db, 'users');
      const docsQuery = query(
        collectionRef,
        where('displayName', '==', currentDisplayName),
      );
      const querySnapshot = await getDocs(docsQuery);
      if (querySnapshot.empty) {
        const currentUserInfo = {
          displayName: currentDisplayName,
          email: currentUser!.email,
          phoneNumber: currentUser!.phoneNumber,
          photoURL: currentUser!.photoURL,
          providerId: currentUser!.providerId,
          uid: currentUser!.uid,
        };
        await addDoc(collection(db, 'users'), currentUserInfo);
        dispatch(setCurrentStepForm('auth'));
        return;
      } else {
        errorHandler('Nickname already been taken', 'handlerNicknameInput Error');
      }
    } catch (error) {
      return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
    }
  },
);

const initialState = {
  stepForm: 'login',
  currentUserFetch: [],
  status: 'loading',
  isTaken: false,
} as formTypes;

const formType = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setCurrentStepForm(state, action: PayloadAction<string>) {
      state.stepForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handlerVerifyCode.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(handlerVerifyCode.fulfilled, (state, action) => {
      state.status = 'auth';
      state.currentUserFetch = action.payload;
    });

    builder.addCase(handlerVerifyCode.rejected, (state) => {
      state.status = 'error';
    });

    builder.addCase(handlerNicknameInput.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(handlerNicknameInput.fulfilled, (state, action) => {
      state.status = 'auth';
      state.isTaken = action.payload;
    });

    builder.addCase(handlerNicknameInput.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const { setCurrentStepForm } = formType.actions;

export default formType.reducer;
