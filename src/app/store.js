import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import productReducer from "../slices/productPage";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer,
  },
});
