import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    userSlcie: userSlice
  }
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default RootState;
