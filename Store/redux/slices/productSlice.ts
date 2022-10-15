import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IProductState {
  productStore: any[];
  categoryStore: any[];
  categoriesAndProductsStore: any[];
}

// Define the initial state using that type
const initialState: IProductState = {
  productStore: [],
  categoryStore: [],
  categoriesAndProductsStore: [],
};

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.productStore = action.payload;
    },
    setCategories: (state, action: PayloadAction<any[]>) => {
      state.categoryStore = action.payload;
    },
    setCategoriesAndItem: (state, action: PayloadAction<any[]>) => {
      state.categoriesAndProductsStore = action.payload;
    },
  },
});

export const { setProducts, setCategories, setCategoriesAndItem } =
  productSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const productState = (state: any) => state.product.showProduct;

export default productSlice.reducer;
