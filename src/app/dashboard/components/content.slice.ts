import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "./interfaces";

const initialState: StateProps = {
  openModalPreview: false,
  id_blog:0,
  link_video:""
};

export const ContentSilce = createSlice({
  name: "content",
  initialState,
  reducers: {
    setOpenModalPreview: (state, action: PayloadAction<boolean>) => {
      state.openModalPreview = action.payload;
    },
    setIdBlog: (state, action: PayloadAction<number>) => {
      state.id_blog = action.payload;
    } ,
    setLinkVideo: (state, action: PayloadAction<string>) => {
      state.link_video = action.payload;
    } ,
    resetState : (state, action) => {
      state.id_blog = 0,
      state.openModalPreview = false;
    }
  },
});

export const { setOpenModalPreview,setIdBlog,resetState ,setLinkVideo} = ContentSilce.actions;

export default ContentSilce.reducer;
