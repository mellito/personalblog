import { createSlice } from "@reduxjs/toolkit";
import { getQuotes } from "../../service/quotes";
const initialState = {
  quotes: [],
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuotes.pending]: (state) => {
      state.quotes = [];
    },
    [getQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload.data;
    },
    [getQuotes.rejected]: (state) => {
      state.quotes = [];
    },
  },
});

export const {} = quoteSlice.actions;
export default quoteSlice.reducer;
