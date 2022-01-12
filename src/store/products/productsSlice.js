import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://retoolapi.dev/CE6lFS/data");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAsyncProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    },
    [getAsyncProducts.pending]: (state, action) => {
      return { ...state, loading: true, products: [], error: null };
    },
    [getAsyncProducts.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    },
  },
});

export default productsSlice.reducer;
