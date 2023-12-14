// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { RootState } from '../store';

// export type User = {
//   id: string;
//   phoneNumber: string;
//   name: string;
// };

// export enum Status {
//   LOADING = 'loading',
//   SUCCES = 'succes',
//   ERROR = 'error'
// }
// export type State = {
//   items: ItemsFetch[];
//   status: Status;
// };

// export const fetchUser = createAsyncThunk('fetch/fetchUserInfo', async (searchValue: string) => {
//   const { data } = await instance.get<FetchApiGithub>(searchValue);
//   return data;
// });

// const initialState = {
//   items: [],
//   status: Status.LOADING //loading, error, succes
// } as State;

// const fetchSlice = createSlice({
//   name: 'fetch',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchUser.pending, (state: RootState) => {
//       state.status = Status.LOADING;
//       state.items = [];
//     });

//     builder.addCase(fetchUser.fulfilled, (state: RootState, action) => {
//       state.items = {
//         avatar: action.payload.avatar_url,
//         userName: action.payload.login,
//         name: action.payload.name,
//         follower: action.payload.followers,
//         following: action.payload.following,
//         repos: action.payload.public_repos,
//         url: action.payload.html_url
//       };
//       state.status = Status.SUCCES;
//     });

//     builder.addCase(fetchUser.rejected, (state: RootState) => {
//       state.status = Status.ERROR;
//       state.items = [];
//     });
//   }
// });

// export default fetchSlice.reducer;
