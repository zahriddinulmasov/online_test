import { configureStore } from "@reduxjs/toolkit";
import { informationReducer } from "./commonData";

export const store = configureStore({
  reducer: {
    commonData: informationReducer,
  },
});
