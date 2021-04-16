import * as types from "./types";

export const fetchListProduct = (payload) => ({
  type: types.FETCH_LIST_PRODUCT,
  payload,
});

export const fetchListProductSuccess = (payload) => ({
  type: types.FETCH_LIST_PRODUCT_SUCCESS,
  payload,
});
