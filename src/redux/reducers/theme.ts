import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface Theme {
  theme: boolean;
}

// Define the initial state using that type
const initialState: Theme = {
  theme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state: { theme: boolean }) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggle } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selecttheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
