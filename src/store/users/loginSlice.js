import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postAsyncLogin = createAsyncThunk(
  "users/postAsyncLogin",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.post(
        "https://api-coffee-flask.herokuapp.com/api/users/login",
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
  showModal: false,
  hiddenModal: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.showModal = action.payload;
    },
    closeModal: (state, action) => {
      state.hiddenModal = action.payload;
    },
  },
  extraReducers: {
    [postAsyncLogin.fulfilled]: (state, action) => {
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    },
    [postAsyncLogin.pending]: (state, action) => {
      return {
        ...state,
        success: false,
        loading: true,
        error: null,
      };
    },
    [postAsyncLogin.rejected]: (state, action) => {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { closeModal, openModal } = loginSlice.actions;
export default loginSlice.reducer;
