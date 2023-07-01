
import avatarReducer from "./slice/avatarSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import reducerApiTicket from './reducer/reducerApiTicket';
import reducerApiTicketPakage from "./reducer/reducerApiTicketPakage";

const store = configureStore({
  reducer: {
    avatar: avatarReducer,
    reducerApiTicket: reducerApiTicket,
    reducerApiTicketPakage: reducerApiTicketPakage
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware],
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
