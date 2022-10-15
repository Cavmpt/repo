import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ICartState {
  cartItems: any[];
}

// Define the initial state using that type
const initialState: ICartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { setProducts, addToCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

const selectCartProducts = (state: any) => state.cartItem;

export { selectCartProducts };

export default cartSlice.reducer;
