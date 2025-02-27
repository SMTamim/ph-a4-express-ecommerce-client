import { RootState } from "./../../store";
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      // console.log({user});
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      // console.log('here');
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;

export const selectCurrentUser = (state: RootState) => state.auth.user;
