import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

//const user = JSON.parse(secureLocalStorage.getItem("user"));

const initialState = { user: null, profile: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    profile: (state, action) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

const { reducer, actions } = authSlice;

export const { login, profile, logout } = actions;
export default reducer;
