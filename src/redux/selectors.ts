import RootState from './store';

export const getCaptcha = (state: RootState) => state.authSlice.captchaFetch;
