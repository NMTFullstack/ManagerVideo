import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  ids: [],
};

export const TuyenDungWorkSilce = createSlice({
  name: "td-work",
  initialState,
  reducers: {
    setListIdsValue: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
  },
});

export const { setListIdsValue } = TuyenDungWorkSilce.actions;

export default TuyenDungWorkSilce.reducer;
