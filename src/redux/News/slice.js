import { createSlice } from '@reduxjs/toolkit';
import { getNewsByHeadersThunk, getTopNewsThunk } from './operations';

const initialState = {
  isLoading: false,
  totalResults: null,
  topNews: [],
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,

  extraReducers: (builder) =>
    builder
      // -----------GET TOP NEWS-------------
      .addCase(getTopNewsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTopNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topNews = action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.error = null;
      })
      .addCase(getTopNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------GET NEWS BY QUERY-------------
      .addCase(getNewsByHeadersThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNewsByHeadersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topNews = action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.error = null;
      })
      .addCase(getNewsByHeadersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const newsReducer = newsSlice.reducer;
