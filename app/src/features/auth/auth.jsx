import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

const user = secureLocalStorage.getItem("user");

const Luser = user ? user : null;

const initialState = { user: Luser };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { login } = actions;
export default reducer;
