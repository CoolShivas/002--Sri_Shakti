import { configureStore } from "@reduxjs/toolkit";
import uniformReducer from "./slice";

export const store = configureStore({
  reducer: {
    uniformData: uniformReducer,
  },
});
