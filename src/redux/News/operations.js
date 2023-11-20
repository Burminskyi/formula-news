import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = 'cb2a36bc7ba1400994f41c7e4f642de4';

export const $instance = axios.create({
  baseURL: "https://6546500efe036a2fa955801e.mockapi.io/",
});

export const getTopNewsThunk = createAsyncThunk(
  "news/getTopNews",
  async (_, thunkApi) => {

    try {
      const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      console.log('data: ', data.articles);
      return data;

    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);