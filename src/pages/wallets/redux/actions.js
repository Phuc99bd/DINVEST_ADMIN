import * as types from "./types";

export const fetchListWallet = (payload) => ({
  type: types.FETCH_LIST_WALLET,
  payload,
});

export const fetchListWalletSuccess = (payload) => ({
  type: types.FETCH_LIST_WALLET_SUCCESS,
  payload,
});
