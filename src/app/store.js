// it is recommmended to have a single store rather than multiple stores
// slice is multiple reducer functios and action fpr a single feature in our app
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: {} });
