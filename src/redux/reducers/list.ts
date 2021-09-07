import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import type { RootState } from "../store";

// Define a type for the slice state
interface ListState {
  loading: boolean;
  data: object[];
  error: string;
}

// Define the initial state using that type
const initialState: ListState = {
  loading: false,
  data: [
    {
      currency: "BTC",
      id: "BTC",
      status: "active",
      price: "8451.36516421",
      price_date: "2019-06-14T00:00:00Z",
      price_timestamp: "2019-06-14T12:35:00Z",
      symbol: "BTC",
      circulating_supply: "17758462",
      max_supply: "21000000",
      name: "Bitcoin",
      logo_url:
        "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
      market_cap: "150083247116.70",
      market_cap_dominance: "0.4080",
      transparent_market_cap: "150003247116.70",
      num_exchanges: "357",
      num_pairs: "42118",
      num_pairs_unmapped: "4591",
      first_candle: "2011-08-18T00:00:00Z",
      first_trade: "2011-08-18T00:00:00Z",
      first_order_book: "2017-01-06T00:00:00Z",
      first_priced_at: "2017-08-18T18:22:19Z",
      rank: "1",
      rank_delta: "0",
      high: "19404.81116899",
      high_timestamp: "2017-12-16",
      "1d": {
        price_change: "269.75208019",
        price_change_pct: "0.03297053",
        volume: "1110989572.04",
        volume_change: "-24130098.49",
        volume_change_pct: "-0.02",
        market_cap_change: "4805518049.63",
        market_cap_change_pct: "0.03",
        transparent_market_cap_change: "4800518049.00",
        transparent_market_cap_change_pct: "0.0430",
        volume_transparency: [
          {
            grade: "A",
            volume: "2144455081.37",
            volume_change: "-235524941.08",
            volume_change_pct: "-0.10",
          },
          {
            grade: "B",
            volume: "15856762.85",
            volume_change: "-6854329.88",
            volume_change_pct: "-0.30",
          },
        ],
      },
    },
  ],
  error: "",
};

export const listSlice = createSlice({
  name: "list",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    req: (state) => {
      state.loading = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    res: (state, action: PayloadAction<object[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    err: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { req, res, err } = listSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectlist = (state: RootState) => state.list.value;

export default listSlice.reducer;
