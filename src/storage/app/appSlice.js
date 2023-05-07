import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  readPolicy: true,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    readPolicyComplete: (state) => {
      console.log("do in redux");
      state.readPolicy = false;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
