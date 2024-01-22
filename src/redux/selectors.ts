import type RootState from '@store/store';

export const getCaptcha = (state: RootState) => state.authSlice.captchaFetch;

export const getCurrentUserFetch = (state: RootState) =>
  state.authenticationFormSlice.currentUserFetch;
export const getisTaken = (state: RootState) => state.userSliceFirestore.isTaken;

export const getStepFormState = (state: RootState) =>
  state.authenticationFormSlice.stepForm;

export const getPhoneNumber = (state: RootState) => state.curentUserSlice.phoneNumber;
export const getSmsCode = (state: RootState) => state.curentUserSlice.smsCode;
export const getDisplayName = (state: RootState) => state.curentUserSlice.displayName;
