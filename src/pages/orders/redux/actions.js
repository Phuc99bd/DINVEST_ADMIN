import * as types from "./types";

export const fetchListOrder = (payload) => ({
  type: types.FETCH_LIST_ORDER,
  payload,
});

export const fetchListOrderSuccess = (payload) => ({
  type: types.FETCH_LIST_ORDER_SUCCESS,
  payload,
});
