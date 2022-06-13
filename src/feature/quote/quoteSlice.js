import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(...action.payload);
    },
  },
});

export const { addQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
