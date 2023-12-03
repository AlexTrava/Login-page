import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@store/slices/authSlice';
import userSlice from '@store/slices/userSlice';
import userSliceFirestore from '@store/slices/userSliceFirestore';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    userSlcie: userSlice,
    userSliceFirestore: userSliceFirestore
  }
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default RootState;
