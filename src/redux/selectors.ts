import type RootState from '@store/store';

export const getCaptcha = (state: RootState) => state.authSlice.captchaFetch;
export const getUsersState = (state: RootState) => state.userSliceFirestore.user;
