import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import type { ConfirmationResult } from '@/types';
import errorHandler from '@/utils/errorsHandler';

type formTypes = {
  formType: string;
  isUserExists: boolean;
};

export const handlerVerifyCode = createAsyncThunk<
  boolean,
  { fetchCapthca: ConfirmationResult; smsCode: string },
  { rejectValue: string }
>('firestore/handlerVerifyCode', async ({ fetchCapthca, smsCode }, { rejectWithValue }) => {
  try {
    await fetchCapthca.confirm(smsCode!);
    const currentUserUid = auth.currentUser?.uid;
    const collectionRef = collection(db, 'users');
    const docsQuery = query(collectionRef, where('uid', '==', currentUserUid));
    const querySnapshot = await getDocs(docsQuery);
    return querySnapshot.empty;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
  }
});

const initialState = {
  formType: 'login',
  isUserExists: false
} as formTypes;

const formType = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setFormType(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handlerVerifyCode.fulfilled, (state, action) => {
      state.isUserExists = action.payload;
    });
  }
});

export const { setFormType } = formType.actions;

export default formType.reducer;
