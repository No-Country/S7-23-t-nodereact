import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/users.slice";
import userAll from "./slices/getUsers.slice";
export default configureStore({
  reducer: {
    user,
    userAll,
  },
});
