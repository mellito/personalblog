import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../../service/projects";
const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [getProjects.pending]: (state) => {
      state.projects = [];
    },
    [getProjects.fulfilled]: (state, action) => {
      state.projects = action.payload.data;
    },
    [getProjects.rejected]: (state) => {
      state.projects = [];
    },
  },
});

export const {} = projectSlice.actions;
export default projectSlice.reducer;
