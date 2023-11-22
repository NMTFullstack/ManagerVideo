import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  ids: [],
};

export const BlogWorkSilce = createSlice({
  name: "blog-work",
  initialState,
  reducers: {
    setListIdsValue: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
  },
});

export const { setListIdsValue } = BlogWorkSilce.actions;

export default BlogWorkSilce.reducer;
