import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { DocumentData, UserInfo } from '@/types';
import errorHandler from '@/utils/errorsHandler';
import { auth, db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import RootState from '../store';

type formTypes = {
  formType: string;
  currentUserFetch:UserInfo[], 
  status:string
};

export const handlerVerifyCode = createAsyncThunk<
UserInfo[] | void,
  undefined,
  { rejectValue: string, state:RootState }
>(
  'firestore/handlerVerifyCode',
  async (_, {rejectWithValue, dispatch, getState}) => {
    try {
      const smsCode = getState().curentUserSlice.smsCode;
      const fetchCaptcha = getState().authSlice.captchaFetch
      if (!smsCode){
        return;
      }
      await fetchCaptcha.confirm(smsCode);
      const currentUserUid = auth.currentUser?.uid;

      if (!currentUserUid){
        return;
      }
      const collectionRef = collection(db, 'users');
      const docsQuery = query(collectionRef, where('uid', '==', currentUserUid));
      const querySnapshot = await getDocs(docsQuery);
      if (querySnapshot.empty) {
        dispatch(setFormType('nick'));
        return;
      }
      const user: UserInfo[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        user.push(doc.data());
      });
      let [{displayName}] = user;
      if (displayName) {
        dispatch(setFormType('auth'));
      }
      return user;
    } catch (error) {
      return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
    }
  },
);

const initialState = {
  formType: 'login',
  currentUserFetch:[],
  status:'loading',
} as formTypes;

const formType = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setFormType(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handlerVerifyCode.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(handlerVerifyCode.fulfilled, (state, action) => {
      state.status = "auth";
      state.currentUserFetch = action.payload;
    });

    builder.addCase(handlerVerifyCode.rejected, (state) => {
      state.status = 'error';
    });
  }
});

export const { setFormType } = formType.actions;

export default formType.reducer;
