import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from "./News/slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

