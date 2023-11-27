import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  ids: [],
};

export const BlogTvSilce = createSlice({
  name: "blog-tv",
  initialState,
  reducers: {
    setListIdsValue: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
  },
});

export const { setListIdsValue } = BlogTvSilce.actions;

export default BlogTvSilce.reducer;
