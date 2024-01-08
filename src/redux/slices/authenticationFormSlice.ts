import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type formTypes = {
  formType: string;
};

const initialState = {
  formType: 'login'
} as formTypes;

const formType = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setFormType(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    }
  }
});

export const { setFormType } = formType.actions;

export default formType.reducer;
