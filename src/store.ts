import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./components/LoginPage/loginPageSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch
