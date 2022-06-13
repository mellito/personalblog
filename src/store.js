import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../src/feature/quote/quoteSlice";
import blogsReducer from "../src/feature/blogs/blogsSlice";
export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    blogs: blogsReducer,
  },
});
