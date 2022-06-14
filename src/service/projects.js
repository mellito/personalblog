import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = process.env.REACT_APP_BASE_URL;

export const getProjects = createAsyncThunk("project/getProjects", async () => {
  try {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${API_URL}/projects`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
