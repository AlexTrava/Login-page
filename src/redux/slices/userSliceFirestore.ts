<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6531905 (fix types NickName component)
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
<<<<<<< HEAD
=======
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserInfo } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase';

export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}

type StateAuth = {
  status: Status;
  user: UserInfo;
};

export const getUser = createAsyncThunk<UserInfo, string, { rejectValue: string }>(
  'firestore/getUser',
  async (uid: string, { rejectWithValue }) => {
    try {
      const usersFetch = await getDocs(collection(db, 'users'));
      const users = [];
      usersFetch.forEach((doc) => {
        users.push(doc.data());
      });
      return users.filter((user) => user.uid === uid);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState = {
  status: Status.LOADING,
  user: {}
} as StateAuth;

export const userSliceFirestore = createSlice({
  name: 'firestore',
  initialState,
  reducers: {
    setClearUser(state) {
      state.user = {} as UserInfo;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = Status.SUCCES;
      state.user = action.payload;
    });

    builder.addCase(getUser.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

export const { setClearUser } = userSliceFirestore.actions;

export default userSliceFirestore.reducer;
>>>>>>> 068dadb (add userSliceFirestore)
=======
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserInfo } from 'firebase/auth';
=======
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import type { UserInfo } from 'firebase/auth';
import type { DocumentData } from 'firebase/firestore';
>>>>>>> 144e331 (fix types NickName component)
=======
>>>>>>> 96a4203 (fix: fetch users, add allias, add types.ts, add routes.ts)
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
<<<<<<< HEAD
<<<<<<< HEAD
      const users: UserInfo[] = [];
      usersFetch.forEach((doc) => {
        users.push(doc.data());
      });
      return users.filter((user) => user.uid === uid); // вернуть не массив? //
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const setUser = createAsyncThunk<undefined, UserInfo, { rejectValue: string }>(
  'firestore/getUser',
  async (infoUser, { rejectWithValue }) => {
    try {
      await addDoc(collection(db, 'users'), infoUser);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState = {
  statusGetUser: Status.LOADING,
  statusSetUser: Status.LOADING,
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
      state.statusGetUser = Status.LOADING;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.statusGetUser = Status.SUCCES;
      state.user = action.payload;
    });

    builder.addCase(getUser.rejected, (state) => {
      state.statusGetUser = Status.ERROR;
    });

    builder.addCase(setUser.pending, (state) => {
      state.statusSetUser = Status.LOADING;
    });

    builder.addCase(setUser.fulfilled, (state) => {
      state.statusSetUser = Status.SUCCES;
    });

    builder.addCase(setUser.rejected, (state) => {
      state.statusSetUser = Status.ERROR;
    });
  }
});

export const { setClearUser } = userSliceFirestore.actions;

export default userSliceFirestore.reducer;
>>>>>>> aa188e0 (add setUser in sliceFirestore)
=======
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserInfo } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase';

export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}

type StateAuth = {
  statusGetUser: Status;
  statusSetUser: Status;
  user: UserInfo[];
};

export const getUser = createAsyncThunk<UserInfo[], string, { rejectValue: string }>(
  'firestore/getUser',
  async (uid: string, { rejectWithValue }) => {
    try {
      const usersFetch = await getDocs(collection(db, 'users'));
      const users: UserInfo[] = [];
      usersFetch.forEach((doc) => {
        users.push(doc.data());
      });
      return users.filter((user) => user.uid === uid); // вернуть не массив? //
=======
      const users: DocumentData = [];
      usersFetch.forEach((doc) => {
        users.push(doc.data());
      });
<<<<<<< HEAD
      return users.filter((user: UserInfo) => user.uid === uid); // вернуть не массив? //
>>>>>>> 144e331 (fix types NickName component)
=======
      return users; // вернуть не массив? //
>>>>>>> 32726b0 (fix: fetch  users in checkSmsCode component. Fetch users in firestore slice)
=======
      const users: UserInfo[] = [];
      usersFetch.forEach((doc: DocumentData) => {
        users.push(doc.data());
      });
      return users;
>>>>>>> 96a4203 (fix: fetch users, add allias, add types.ts, add routes.ts)
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
<<<<<<< HEAD
>>>>>>> cf929d4 (update checkSmsCodeForm comp)
=======
>>>>>>> 6531905 (fix types NickName component)
=======
>>>>>>> 144e331 (fix types NickName component)
