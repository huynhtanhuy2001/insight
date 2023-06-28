import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from "./features/avatarSlice";

const store = configureStore({
  reducer: {
    avatar: avatarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
