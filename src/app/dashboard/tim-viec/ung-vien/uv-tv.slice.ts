import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  ids: [],
};

export const UngVienTvSilce = createSlice({
  name: "uv-tv",
  initialState,
  reducers: {
    setListIdsValue: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
  },
});

export const { setListIdsValue } = UngVienTvSilce.actions;

export default UngVienTvSilce.reducer;
