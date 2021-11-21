import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.amount += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.amount;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
