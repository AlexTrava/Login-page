import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// import userSlice from './slices/userSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    authSlice: authSlice
  }
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default RootState;
