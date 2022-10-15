import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ILanguageState {
  language: any;
}

// Define the initial state using that type
const initialState: ILanguageState = {
  language: "English",
};

export const languageSlice = createSlice({
  name: "language",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<any>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

// Other code such as selectors can use the imported `RootState` type

const selectLanguage = (state: any) => state.cartItem;

export { selectLanguage };

export default languageSlice.reducer;
