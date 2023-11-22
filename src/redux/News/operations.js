import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "ad6fe495f4cc48d0a8cb8e2866b89b92";

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
        throw new Error("По данному запросу ничего не найдено");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
