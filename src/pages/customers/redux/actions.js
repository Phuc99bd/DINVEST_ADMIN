import * as types from "./types";

export const fetchListCustomer = (payload) => ({
  type: types.FETCH_LIST_CUSTOMER,
  payload,
});

export const fetchListCustomerSuccess = (payload) => ({
  type: types.FETCH_LIST_CUSTOMER_SUCCESS,
  payload,
});
