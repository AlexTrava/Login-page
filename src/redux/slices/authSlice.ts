import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { auth } from '../../firebase';

export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}

type StateAuth = {
  status: Status;
  captchaFetch: any;
};

const setupRecaptcha = (phoneNumber: string) => {
  const recapthca = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible'
  });
  return signInWithPhoneNumber(auth, phoneNumber, recapthca);
};
let testObj;
export const signIn = createAsyncThunk(
  'auth/signPhoneNumber',
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      testObj = await setupRecaptcha(phoneNumber);
      return testObj;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  status: Status.LOADING,
  captchaFetch: {
    verificationId: '',
    onConfirmation: () => {}
  }
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
      if (action.payload) {
        state.status = Status.SUCCES;
        state.captchaFetch = action.payload;
      }
    });

    builder.addCase(signIn.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

export default authSlice.reducer;
