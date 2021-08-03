import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    no_of_comments: 179,
    sentiment: "Bullish",
    sentiment_score: 0.13,
    ticker: "GME",
  },
  {
    no_of_comments: 29,
    sentiment: "Bullish",
    sentiment_score: 0.23,
    ticker: "AMC",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts(state, action) {
      const data = createApiRequest(action.payload);
      state.push(data);
    },
  },
});

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;
