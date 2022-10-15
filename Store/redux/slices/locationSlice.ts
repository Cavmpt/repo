import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ILocationState {
  location: any;
}

// Define the initial state using that type
const initialState: ILocationState = {
  location: "montreal",
};

export const locationSlice = createSlice({
  name: "location",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

// Other code such as selectors can use the imported `RootState` type

const selectLocation = (state: any) => state.cartItem;

export { selectLocation };

export default locationSlice.reducer;
