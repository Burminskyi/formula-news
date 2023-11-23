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
    const { selectedCountryCode, selectedCategory, rowsPerPage, page } = params;
    const country = selectedCountryCode || "us";
    try {
      const { data } = await $instance.get(
        `top-headlines/?country=${country}&pageSize=${rowsPerPage}&page=${
          page + 1
        }${selectedCategory ? `&category=${selectedCategory}` : ""}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getNewsByHeadersThunk = createAsyncThunk(
  "news/getNewsByHeaders",
  async (params, thunkApi) => {
    const { query, rowsPerPage, page } = params;
    try {
      const { data } = await $instance.get(
        `everything?q=${query}&pageSize=${rowsPerPage}&page=${page + 1}`
      );
      if (data.totalResults === 0)
        throw new Error("No results found for this search");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
