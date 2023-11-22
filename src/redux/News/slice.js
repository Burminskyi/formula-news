import { createSlice } from "@reduxjs/toolkit";
import { getNewsByHeadersThunk, getTopNewsThunk } from "./operations";

const initialState = {
  isLoading: false,
  totalResults: null,
  topNews: [],
  error: null,
  rowsPerPage: 10,
  page: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetRowsPerPage: (state) => {
      state.rowsPerPage = initialState.rowsPerPage;
    },
    resetPage: (state) => {
      state.page = initialState.page;
    },
  },
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

export const { setRowsPerPage, setPage, resetRowsPerPage, resetPage } =
  newsSlice.actions;

export const newsReducer = newsSlice.reducer;
