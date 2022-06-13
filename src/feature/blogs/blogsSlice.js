import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogsArray: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlogs: (state, action) => {
      state.blogsArray.push(...action.payload);
    },
  },
});

export const { addBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
