import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null as User | null, token: null as string | null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
    }
  }
})

export const { setCredentials, logout, setUser, setToken } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;