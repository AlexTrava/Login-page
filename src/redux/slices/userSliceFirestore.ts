import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import type { DocumentData, UserInfo } from '@/types';
import errorHandler from '@/utils/errorsHandler';

import type RootState from '../store';

export enum Status {
  LOADING = 'loading',
  AUTH = 'auth',
  ERROR = 'error',
}

type StateAuth = {
  status: Status;
  currentUserFetch: UserInfo[];
  isTaken: boolean;
};

export const getUser = createAsyncThunk<UserInfo[], undefined, { rejectValue: string }>(
  'firestore/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const currentUserUid = auth.currentUser?.uid;
      const collectionRef = collection(db, 'users');
      const docsQuery = query(collectionRef, where('uid', '==', currentUserUid));
      const querySnapshot = await getDocs(docsQuery);
      const user: UserInfo[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        user.push(doc.data());
      });
      return user;
    } catch (error) {
      return rejectWithValue(errorHandler(error, 'getUser Error'));
    }
  },
);

export const isTakenDisplayName = createAsyncThunk<
  boolean,
  string,
  { rejectValue: string }
>('firestore/isTakenDisplayName', async (displayName, { rejectWithValue }) => {
  try {
    const collectionRef = collection(db, 'users');
    const docsQuery = query(collectionRef, where('displayName', '==', displayName));
    const querySnapshot = await getDocs(docsQuery);
    return querySnapshot.empty;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'isTakenDisplayName Error'));
  }
});

export const setUser = createAsyncThunk<
  undefined,
  UserInfo,
  { rejectValue: string; state: RootState }
>('firestore/setUser', async (infoUser, { rejectWithValue }) => {
  try {
    await addDoc(collection(db, 'users'), infoUser);
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'setUser Error'));
  }
});

const initialState = {
  status: Status.LOADING,
  currentUserFetch: [],
  isTaken: false,
} as StateAuth;

export const userSliceFirestore = createSlice({
  name: 'firestore',
  initialState,
  reducers: {
    setClearUser(state) {
      state.currentUserFetch = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = Status.AUTH;
      state.currentUserFetch = action.payload;
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

    builder.addCase(isTakenDisplayName.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(isTakenDisplayName.fulfilled, (state, action) => {
      state.status = Status.AUTH;
      state.isTaken = action.payload;
    });

    builder.addCase(isTakenDisplayName.rejected, (state) => {
      state.status = Status.ERROR;
      state.isTaken = false;
    });
  },
});

export const { setClearUser } = userSliceFirestore.actions;

export default userSliceFirestore.reducer;
