import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

const cprofile = secureLocalStorage.getItem("profile");

const Lprofile = cprofile ? cprofile : null;

const initialState = { profile: Lprofile };

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

const { reducer, actions } = profileSlice;

export const { profile } = actions;
export default reducer;
