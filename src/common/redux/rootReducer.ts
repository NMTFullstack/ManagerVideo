
import BlogTvSilce from "@/app/dashboard/tim-viec/blog/blog-tv.slice";
import TuyenDungTvSilce from "@/app/dashboard/tim-viec/tuyen-dung/uv-tv.slice";
import  UngVienTvSilce from "@/app/dashboard/tim-viec/ung-vien/uv-tv.slice";
import ContentSilce from "@/app/dashboard/components/content.slice"
import BlogWorkSilce from "@/app/dashboard/work/blog/blog-work.slice"
import TuyenDungWorkSilce from "@/app/dashboard/work/tuyen-dung/td-tv.slice"
import UngVienWorkSilce from "@/app/dashboard/work/ung-vien/uv-tv.slice"
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
