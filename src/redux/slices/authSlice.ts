import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { auth } from '@/firebase';
import type { ConfirmationResult } from '@/types';
import errorHandler from '@/utils/errorsHandler';

export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error',
}

type StateAuth = {
  status: Status;
  captchaFetch: ConfirmationResult;
};

const setupRecaptcha = (phoneNumber: string) => {
  const recapthca = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible',
  });
  return signInWithPhoneNumber(auth, phoneNumber, recapthca);
};
export const signIn = createAsyncThunk<
  ConfirmationResult,
  string,
  { rejectValue: string }
>('auth/signPhoneNumber', async (phoneNumber: string, { rejectWithValue }) => {
  try {
    const recaptcha = await setupRecaptcha(phoneNumber);
    return recaptcha;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

const initialState = {
  status: Status.LOADING,
  captchaFetch: {},
} as StateAuth;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = Status.SUCCES;
      state.captchaFetch = action.payload;
    });

    builder.addCase(signIn.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export default authSlice.reducer;
