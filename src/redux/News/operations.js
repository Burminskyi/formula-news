import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "cb2a36bc7ba1400994f41c7e4f642de4";

export const $instance = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  params: {
    apiKey: API_KEY,
  },
});

export const getTopNewsThunk = createAsyncThunk(
  "news/getTopNews",
  async (params = {}, thunkApi) => {
    const { selectedCountryCode, selectedCategory } = params;
    const country = selectedCountryCode || "us";
    try {
      const { data } = await $instance.get(
        `top-headlines/?country=${country}${
          selectedCategory ? `&category=${selectedCategory}` : ""
        }`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getNewsByHeadersThunk = createAsyncThunk(
  "news/getNewsByHeaders",
  async (query, thunkApi) => {
    try {
      const { data } = await $instance.get(`everything?q=${query}`);
      if (data.totalResults === 0)
        throw new Error("По данному запросу ничего не найдено");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
