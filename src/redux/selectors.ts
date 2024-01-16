import type RootState from '@store/store';

export const getCaptcha = (state: RootState) => state.authSlice.captchaFetch;

export const getUsersState = (state: RootState) => state.userSliceFirestore.user;
export const getisTaken = (state: RootState) => state.userSliceFirestore.isTaken;

export const getFormTypeState = (state: RootState) => state.authenticationFormSlice.formType;
export const getIsUserExist = (state: RootState) => state.authenticationFormSlice.isUserExists;

export const getPhoneNumber = (state: RootState) => state.curentUserSlice.phoneNumber;
export const getSmsCode = (state: RootState) => state.curentUserSlice.smsCode;
export const getDisplayName = (state: RootState) => state.curentUserSlice.displayName;
