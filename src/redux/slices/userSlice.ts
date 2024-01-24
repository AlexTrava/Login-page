import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User } from '@/shared/types/Types';

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
