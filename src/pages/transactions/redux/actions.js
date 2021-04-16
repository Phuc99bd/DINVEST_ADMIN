import * as types from "./types";

export const fetchListTransaction = (payload) => ({
  type: types.FETCH_LIST_TRANSACTION,
  payload,
});

export const fetchListTransactionSuccess = (payload) => ({
  type: types.FETCH_LIST_TRANSACTION_SUCCESS,
  payload,
});
