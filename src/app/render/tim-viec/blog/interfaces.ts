export interface DataTypeOneBlogTv {
  news_id?: number;
  type?: number;
}
export interface DataTypeAllBlogTv {
  page?: number;
  type?: number;
  pageSize?: number;
}

export interface DataTypeUploadBlog {
  title?: string;
  file?: string;
  des?: string;
  id_blog?: number;
  type?: number;
  com_name?: string;
}

interface TimeNewDataType {
  new_id?: number;
  voice_id?: number;
  news_time_ai?: any;
}
export interface DataTypeResult {
  news_id?: number;
  news_audio?: string[] | undefined;
  news_img?: string[];
  news_link?: string;
  tieu_de?: string | undefined;
  time_new?: TimeNewDataType[] | undefined;
}
