import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ILanguageState {
  loading: boolean;
}

// Define the initial state using that type
const initialState: ILanguageState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

// Other code such as selectors can use the imported `RootState` type

const isLoading = (state: any) => state.loading;

export { isLoading };

export default loadingSlice.reducer;
