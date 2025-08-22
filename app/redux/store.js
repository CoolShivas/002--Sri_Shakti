import { configureStore } from "@reduxjs/toolkit";
import uniformReducer from "./slice";
import contactDetailsReducer from "./detailSlice";
import logoHeroImagesReducer from "./thirdSlice";

export const store = configureStore({
  reducer: {
    uniformData: uniformReducer,
    contactDetails: contactDetailsReducer,
    logoHeroImages: logoHeroImagesReducer,
  },
});
