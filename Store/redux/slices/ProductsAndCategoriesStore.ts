import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IProductsAndCategoriesState {
  products: any;
  catgories: any;
}

// Define the initial state using that type
const initialState: IProductsAndCategoriesState = {
  products: [],
  catgories: [],
};

export const ProductAndCategoriesSlice = createSlice({
  name: "ProductAndCategoriesSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProductsAndCategories: (state, action: PayloadAction<any>) => {
      state.products = action.payload[1];
      state.catgories = action.payload[0];
    },
  },
});

export const { setProductsAndCategories } = ProductAndCategoriesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

const selectProductsAndCategories = (state: any) => state.cartItem;

export { selectProductsAndCategories };

export default ProductAndCategoriesSlice.reducer;
