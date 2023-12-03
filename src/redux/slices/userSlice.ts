import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserInfo } from 'firebase/auth';

const initialState = {
  phoneNumber: null,
  uid: '',
  displayName: null
} as UserInfo;

const userSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },

    setVerificationId(state, action: PayloadAction<string>) {
      state.uid = action.payload;
    },

    setDisplayName(state, action: PayloadAction<string>) {
      state.displayName = action.payload;
    }
  }
});

export const { setPhoneNumber, setVerificationId, setDisplayName } = userSlice.actions;

export default userSlice.reducer;
