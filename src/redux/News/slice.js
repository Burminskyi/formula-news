import { createSlice } from '@reduxjs/toolkit';
import { getTopNewsThunk } from './operations';

const initialState = {
  isLoading: false,
  totalResults: null,
  topNews: [],
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  // reducers: {
  //   setFavoriteCars: (state, action) => {
  //     state.favoriteCars.push(action.payload);
  //   },
  //   removeFromFavoriteCars: (state, action) => {
  //     state.favoriteCars = state.favoriteCars.filter(
  //       (car) => car.id !== action.payload
  //     );
  //   },
  // },

  extraReducers: (builder) =>
    builder
      // -----------GET CARS-------------
      .addCase(getTopNewsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTopNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topNews = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(getTopNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

// export const { setFavoriteCars, removeFromFavoriteCars } = carsSlice.actions;


export const newsReducer = newsSlice.reducer;
