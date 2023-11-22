import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface IHeaderState {
  isOpenUserMenu: boolean;
  isOpenPopupLogin: boolean;
}


const initialState: IHeaderState = {
  isOpenUserMenu: false,
  isOpenPopupLogin: false,
};

const headerSlice = createSlice({
  name: "header-slice",
  initialState,
  reducers: {
    setOpenUserMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenUserMenu = action.payload;
    },
    resetHeaderState: (state) => {
      state.isOpenUserMenu = initialState.isOpenUserMenu;
    },
    setPopupLogin: (state, action: PayloadAction<boolean>) => {
      state.isOpenPopupLogin = action.payload;
    },
  },
});

export const { resetHeaderState, setOpenUserMenu, setPopupLogin } =
  headerSlice.actions;

export default headerSlice.reducer;
