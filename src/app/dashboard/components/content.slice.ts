import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  openModalPreview: false,
  openModalYoutube: false,
  openModalFace: false,
  openModalIg: false,
  openModalTwitter: false,
  openModalTiktok: false,
  id_blog: 0,
  link_video: "",
  type: 1,
  com_name: "",
};

export const ContentSilce = createSlice({
  name: "content",
  initialState,
  reducers: {
    setOpenModalPreview: (state, action: PayloadAction<boolean>) => {
      state.openModalPreview = action.payload;
    },
    setOpenModalYoutube: (state, action: PayloadAction<boolean>) => {
      state.openModalYoutube = action.payload;
    },
    setOpenModalFaceBook: (state, action: PayloadAction<boolean>) => {
      state.openModalFace = action.payload;
    },
    setOpenModalIg: (state, action: PayloadAction<boolean>) => {
      state.openModalIg = action.payload;
    },
    setOpenModalTwitter: (state, action: PayloadAction<boolean>) => {
      state.openModalTwitter = action.payload;
    },
    setOpenModalTiktok: (state, action: PayloadAction<boolean>) => {
      state.openModalTiktok = action.payload;
    },
    setIdBlog: (state, action: PayloadAction<number>) => {
      state.id_blog = action.payload;
    },
    setLinkVideo: (state, action: PayloadAction<string>) => {
      state.link_video = action.payload;
    },
    setTypeVideo: (state, action: PayloadAction<number>) => {
      state.type = action.payload;
    },
    setComNameVideo: (state, action: PayloadAction<string>) => {
      state.com_name = action.payload;
    },
    resetState: (state, action) => {
      state.id_blog = 0;
      state.openModalPreview = false;
      state.openModalYoutube = false;
      state.openModalFace = false;
      state.openModalIg = false;
      state.openModalTiktok = false;
      state.openModalTwitter = false;
    },
  },
});

export const {
  setOpenModalPreview,
  setIdBlog,
  resetState,
  setLinkVideo,
  setTypeVideo,
  setComNameVideo,
  setOpenModalYoutube,
  setOpenModalFaceBook,
  setOpenModalIg,
  setOpenModalTwitter,
  setOpenModalTiktok,
} = ContentSilce.actions;

export default ContentSilce.reducer;
