export type Lang = "en" | "vi";
export type FileType = "png" | "jpg" | "jpeg" | "pdf";

export const langs: Record<Lang, LangObj> = {
  en: {
    label: "English",
    value: "en",
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  vi: {
    label: "Vietnamese",
    value: "vi",
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
};

export interface PresignedResponse {
  id: number;
  url: string;
}
export interface BaseResponse {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  version: number;
  id: number;
}
export interface ImageResponse {
  id: number;
  key: string;
  type: FileType;
  url: string | null;
  fileName?: string;
}

export interface ListResponse<T> {
  data: T[];
  total: number;
}

export interface ErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
}

export interface LangObj {
  label: string;
  value: Lang;
  icon: string;
}

export type ISelectedLang = {
  payload: LangObj;
  type: string;
};

export interface ICartProductItem {
  quantity: number;
  productToVariantIds: number[];
  product: IProductCart;
}

export interface IProductCart {
  onSale: boolean;
  id: number;
  type: string;
  isFeatured: boolean;
  taxStatus: string;
  thumbnail: IThumbnailProduct;
  productDetails: IProductDetail[];
  productVariants: ICartProductVariant[];
}

export interface ICartProductVariant {
  id: number;
  price: number;
  quantity: number;
  salePrice: number;
  sku: string;
  productAttributeTerms: IProductAttributeTerm[];
}

interface IProductAttributeTerm {
  id: number;
  productAttributeTermDetails: IProductAttributeTermDetails[];
  productAttribute: IProductAttribute;
}

interface IProductAttribute {
  id: number;
  type: string;
  productAttributeDetails: IProductAttributeDetails[];
}

interface IProductAttributeTermDetails {
  id: number;
  lang: string;
  value: string;
}

interface IProductAttributeDetails {
  id: number;
  lang: string;
  name: string;
  description: string;
  slug: string;
}

export interface IThumbnailProduct {
  createdAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  key: string;
  url: string;
  type: string;
  size: number;
  uploaderId: number;
}

export interface IProductDetail {
  lang: string;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
}

export interface ICartDataSubmit {
  productVariantList: ITypeCartItem[];
  productId: number;
}

export interface ITypeCartItem {
  productVariantId: number;
  quantity: number;
}

export enum MessageType {
  ERROR = "error",
  SUCCESS = "success",
}

export interface IShowMessage {
  type: MessageType;
  message: string;
}

export interface IParamsPaging {
  page: number;
  limit: number;
}

export interface MetaData {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
