import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "cb2a36bc7ba1400994f41c7e4f642de4";

export const $instance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines`,
  params: {
    apiKey: API_KEY,
  },
});

export const getTopNewsThunk = createAsyncThunk(
  "news/getTopNews",
  async (params = {}, thunkApi) => {
    console.log("params: ", params);
    const { selectedCountry, selectedCategory } = params;
    const country = selectedCountry || "us";
    try {
      const { data } = await $instance.get(
        `/?country=${country}${
          selectedCategory ? `&category=${selectedCategory}` : ""
        }`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
