import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },

    setVerificationId(state, action: PayloadAction<string>) {
      state.verificationId = action.payload;
    }
  }
});
export const { setPhoneNumber, setVerificationId } = userSlice.actions;

export default userSlice.reducer;
