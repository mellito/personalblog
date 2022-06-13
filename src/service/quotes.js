import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = process.env.REACT_APP_BASE_URL;
console.log(API_URL);

export const getQuotes = createAsyncThunk("quote/getQuotes", async () => {
  try {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${API_URL}/quotes`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
