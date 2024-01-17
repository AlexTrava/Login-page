import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { ConfirmationResult } from '@/types';
import errorHandler from '@/utils/errorsHandler';

type formTypes = {
  formType: string;
};

export const handlerVerifyCode = createAsyncThunk<
  undefined,
  { fetchCapthca: ConfirmationResult; smsCode: string },
  { rejectValue: string }
>(
  'firestore/handlerVerifyCode',
  async ({ fetchCapthca, smsCode }, { rejectWithValue }) => {
    try {
      await fetchCapthca.confirm(smsCode!);
    } catch (error) {
      return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
    }
  },
);

const initialState = {
  formType: 'login',
} as formTypes;

const formType = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setFormType(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    },
  },
});

export const { setFormType } = formType.actions;

export default formType.reducer;
