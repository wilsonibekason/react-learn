// it is recommmended to have a single store rather than multiple stores
// slice is multiple reducer functios and action fpr a single feature in our app
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./feature/counter/counterSlice";
import counterReducer from "./feature/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
