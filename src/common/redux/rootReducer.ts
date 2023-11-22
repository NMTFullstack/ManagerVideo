
import BlogTvSilce from "@/app/dashboard/tv/blog/blog-tv.slice";
import TuyenDungTvSilce from "@/app/dashboard/tv/td/uv-tv.slice";
import  UngVienTvSilce from "@/app/dashboard/tv/uv/uv-tv.slice";
import ContentSilce from "@/app/dashboard/components/content.slice"
import BlogWorkSilce from "@/app/dashboard/work/blog/blog-work.slice"
import TuyenDungWorkSilce from "@/app/dashboard/work/td/td-tv.slice"
import UngVienWorkSilce from "@/app/dashboard/work/uv/uv-tv.slice"
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  BlogTvSilce: BlogTvSilce,
  ContentSilce:ContentSilce,
  TuyenDungTvSilce:TuyenDungTvSilce,
  UngVienTvSilce:UngVienTvSilce,
  BlogWorkSilce:BlogWorkSilce,
  UngVienWorkSilce:UngVienWorkSilce,
  TuyenDungWorkSilce:TuyenDungWorkSilce,
});

export { rootReducer };
