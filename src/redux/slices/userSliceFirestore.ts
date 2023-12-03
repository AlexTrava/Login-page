import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';

import { db } from '@/firebase';
import type { DocumentData, UserInfo } from '@/types';

export enum Status {
  LOADING = 'loading',
  AUTH = 'auth',
  ERROR = 'error'
}

type StateAuth = {
  status: Status;
  user: UserInfo[];
};

export const getUser = createAsyncThunk<UserInfo[], undefined, { rejectValue: string }>(
  'firestore/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const usersFetch = await getDocs(collection(db, 'users'));
      const users: UserInfo[] = [];
      usersFetch.forEach((doc: DocumentData) => {
        users.push(doc.data());
      });
      return users;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const setUser = createAsyncThunk<undefined, UserInfo, { rejectValue: string }>(
  'firestore/setUser',
  async (infoUser, { rejectWithValue }) => {
    try {
      await addDoc(collection(db, 'users'), infoUser);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState = {
  status: Status.LOADING,
  user: []
} as StateAuth;

export const userSliceFirestore = createSlice({
  name: 'firestore',
  initialState,
  reducers: {
    setClearUser(state) {
      state.user = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = Status.AUTH;
      state.user = action.payload;
    });

    builder.addCase(getUser.rejected, (state) => {
      state.status = Status.ERROR;
    });

    builder.addCase(setUser.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(setUser.fulfilled, (state) => {
      state.status = Status.AUTH;
    });

    builder.addCase(setUser.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

export const { setClearUser } = userSliceFirestore.actions;

export default userSliceFirestore.reducer;
