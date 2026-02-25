/** @format */

// src/store/portfolioSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPortfolioDataAPI } from "../services/api";
import type { PortfolioState } from "../types";

const initialState: PortfolioState = {
  projects: [],
  experience: [],
  status: "idle",
  error: null,
};

// Async thunk for fetching data
export const fetchPortfolioData = createAsyncThunk(
  "portfolio/fetchData",
  async () => {
    const response: any = await fetchPortfolioDataAPI();
    return response;
  },
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {}, // Synchronous actions go here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload.projects;
        state.experience = action.payload.experience;
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default portfolioSlice.reducer;
