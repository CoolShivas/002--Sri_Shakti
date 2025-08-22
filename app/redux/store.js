import { configureStore } from "@reduxjs/toolkit";
import uniformReducer from "./slice";
import contactDetailsReducer from "./detailSlice"; // Add detailSlice reducer

export const store = configureStore({
  reducer: {
    uniformData: uniformReducer,
    contactDetails: contactDetailsReducer, // Register detailSlice
  },
});
