import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataType {
  currency: string;
  id: string;
  status: string;
  price: string;
  max_supply: string;
  name: string;
  logo_url: string;
  market_cap: string;
  num_exchanges: string;
  rank: string;
  high: string;
}
// Define a type for the slice state
interface ListState {
  loading: boolean;
  data: [DataType];
  error: string;
}

// Define the initial state using that type
const initialState: ListState = {
  loading: false,
  data: [
    {
      currency: "",
      id: "",
      status: "",
      price: "",
      max_supply: "",
      name: "",
      logo_url: "",
      market_cap: "",
      num_exchanges: "",
      rank: "",
      high: "",
    },
  ],
  error: "",
};

export const listSlice = createSlice({
  name: "list",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    req: (state: ListState) => {
      state.loading = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    res: (state: ListState, action: PayloadAction<[DataType]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    err: (state: ListState, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { req, res, err } = listSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectlist = (state: RootState) => state.list.value;

export default listSlice.reducer;
