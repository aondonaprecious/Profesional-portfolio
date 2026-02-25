/** @format */

// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfoilioSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
