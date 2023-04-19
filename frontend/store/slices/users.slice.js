import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userGlobal: (state, action) => action.payload,
  },
});

export const { userGlobal } = usersSlice.actions;

export default usersSlice.reducer;
