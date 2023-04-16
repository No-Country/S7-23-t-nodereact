import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 0, projectId: 0 },
  reducers: {
    amountGlobal: (state, action) => action.payload,
  },
});

export const { amountGlobal } = amountSlice.actions;

export default amountSlice.reducer;
