import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type User = {
  phoneNumber: string;
  verificationId: string;
};

const initialState = {
  phoneNumber: '',
  verificationId: ''
} as User;

const userSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPhoneNumber(state: RootState, action: PayloadAction) {
      state.phoneNumber = action.payload;
    },

    setVerificationId(state: RootState, action: PayloadAction) {
      state.verificationId = action.payload;
    }
  }
});
export const { setPhoneNumber, setVerificationId } = userSlice.actions;

export default userSlice.reducer;
