import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  ids: [],
};

export const TuyenDungTvSilce = createSlice({
  name: "tuyendung-tv",
  initialState,
  reducers: {
    setListIdsValue: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
  },
});

export const { setListIdsValue } = TuyenDungTvSilce.actions;

export default TuyenDungTvSilce.reducer;
