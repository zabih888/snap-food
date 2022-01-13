import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  preview: {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showPreview: (state, action) => {
      state.preview = action.payload;
    },
    increment: (state, action) => {
      state.total = +state.total + +action.payload.offPrice;
      const findItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findItem < 0) {
        state.cart.push(action.payload);
      } else {
        state.cart[findItem].quantity++;
      }
    },
    // dispatch(
    //   item.quantity === 1 ? remove(item) : decrement(item)
    // )
    decrement: (state, action) => {
      state.total = +state.total - +action.payload.offPrice;
      const findItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[findItem].quantity--
    },
    remove: (state, action) => {
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = filteredItems;
    },
  },
});

export const { decrement, increment, remove, showPreview } = cartSlice.actions;
export default cartSlice.reducer;
