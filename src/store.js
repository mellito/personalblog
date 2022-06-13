import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../src/feature/quote/quoteSlice";
export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
