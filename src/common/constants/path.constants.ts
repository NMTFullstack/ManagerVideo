import { getCookie } from "../utils/getValueFromCookie";

const appId = getCookie("APP_ID");
export const PATH_AUTH = {
  login: `/${appId}/login`,
  register: `/${appId}/register`,
  forgot_password: `/${appId}/forgot-password`,
  otp: `/${appId}/otp`,
  reset_password: `/${appId}/reset-password`,
  create_information: `/${appId}/create-information`,
};

export const PATH_HOME = {
  root: `/${appId}/`,
  add_point: `/${appId}/loyalty/add-point`,
  add_point_success: `/${appId}/loyalty/add-point/success`,
  product: {
    root: `/${appId}/category`,
    detail: (id: number) => `/${appId}/productDetail/${id}`,
  },
  order_history: {
    list: `/${appId}/order-history`,
    detail: `/${appId}/order-history/:id`,
  },
  checkout: `/${appId}/checkout`,
  profile: `/${appId}/profile`,
  notify: `/${appId}/notify`,
  eVoucher: {
    list: `/${appId}/e-voucher`,
    detail: `/${appId}/e-voucher/:id`,
  },
  game: {
    root: `/${appId}/game`,
    lucky_wheel: {
      root: `/${appId}/game/lucky-wheel`,
      detail: `/${appId}/game/lucky-wheel/:id`,
    },
  },
  news: {
    root: `/${appId}/news`,
    detail: `/${appId}/news-detail/:id`,
    subject: `/${appId}/subject`,
  },
};
