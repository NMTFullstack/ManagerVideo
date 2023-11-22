import { ReactNode } from "react";

export interface DataTableManagerFbType {
    key?: string;
    title?: string;
    dataIndex?: string;
    render?: ReactNode;
}

export interface ListVideoType {
    page?: number;
    pageSize?: number;
}


export interface UploadYoutubeType {
  id_blog?:number,
  type?:number,
  com_name?:string,
  title?:string,
  description?:string
}
