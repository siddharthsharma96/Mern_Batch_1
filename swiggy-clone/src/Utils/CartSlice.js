import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(state.items);
      console.log(action);

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;
