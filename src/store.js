import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../src/feature/quote/quoteSlice";
import blogsReducer from "../src/feature/blogs/blogsSlice";
import projectReducer from "../src/feature/projects/projectSlice";
export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    blogs: blogsReducer,
    project: projectReducer,
  },
});
