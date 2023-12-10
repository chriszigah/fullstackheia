import { configureStore } from "@reduxjs/toolkit";
import { authSlice as authReducer } from "../features";
import { profileSlice as profileReducer } from "../features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});
