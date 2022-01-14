import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postAsyncRegister = createAsyncThunk(
  "users/postAsyncRegister",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.post(
        "https://api-coffee-flask.herokuapp.com/api/users/register",
        payload
      );
    } catch (error) {
      return rejectWithValue(error.response.data.massage);
    }
  }
);

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: {
    [postAsyncRegister.fulfilled]: (state, action) => {
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    },
    [postAsyncRegister.pending]: (state, action) => {
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    },
    [postAsyncRegister.rejected]: (state, action) => {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export default registerSlice.reducer;
