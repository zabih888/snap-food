import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import registerReducer from "./users/registerSlice";
import loginReducer from "./users/loginSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    register: registerReducer,
    login: loginReducer,
  },
});
