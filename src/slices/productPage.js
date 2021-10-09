import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToSinglePage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// change state from here
export const { addToSinglePage } = productSlice.actions;

// pull state from here
export const selectItem = (state) => state.product.value;

export default productSlice.reducer;
