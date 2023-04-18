import { createSlice } from "@reduxjs/toolkit";

const getUsersSlice = createSlice({
  name: "userAll",
  initialState: {},
  reducers: {
    userGetUsers: (state, action) => action.payload,
  },
});

export const { userGetUsers } = getUsersSlice.actions;

export default getUsersSlice.reducer;
