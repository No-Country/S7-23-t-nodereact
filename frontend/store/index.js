import { configureStore } from "@reduxjs/toolkit";
import amount from "./slices/amount.slice";
export default configureStore({
  reducer: {
    amount,
  },
});
