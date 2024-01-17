import { configureStore } from '@reduxjs/toolkit';
import authenticationFormSlice from '@store/slices/authenticationFormSlice';
import authSlice from '@store/slices/authSlice';
import userSliceFirestore from '@store/slices/userSliceFirestore';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import curentUserSlice from '@/redux/slices/curentUserSlice';

export const store = configureStore({
  reducer: {
    authenticationFormSlice: authenticationFormSlice,
    authSlice: authSlice,
    curentUserSlice: curentUserSlice,
    userSliceFirestore: userSliceFirestore,
  },
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default RootState;
