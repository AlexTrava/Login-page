import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { auth } from '../../firebase';
import { RootState } from '../store';

export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}

type StateAuth = {
  status: Status;
  captchaFetch: {
    cb: () => void;
    id: string;
  };
};

const setupRecaptcha = (phoneNumber: string) => {
  const recapthca = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible'
  });
  return signInWithPhoneNumber(auth, phoneNumber, recapthca);
};
let testObj = {};
export const signIn = createAsyncThunk(
  'auth/signPhoneNumber',
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      testObj = await setupRecaptcha(phoneNumber);
      console.log(testObj, 'its testObj slice');
      return testObj;
    } catch (error) {
      return rejectWithValue(error.message, 'error auth slice signIn');
    }
  }
);

const initialState = {
  status: Status.LOADING,
  captchaFetch: {}
} as StateAuth;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state: RootState) => {
      state.status = Status.LOADING;
    });

    builder.addCase(signIn.fulfilled, (state: RootState, action) => {
      state.status = Status.SUCCES;
      state.captchaFetch = action.payload;
    });

    builder.addCase(signIn.rejected, (state: RootState) => {
      state.status = Status.ERROR;
    });
  }
});

export default authSlice.reducer;
