import { all, takeLatest, call, put } from "redux-saga/effects";
import _, { get } from "lodash";
import * as types from "./types";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";

function* fetchWallet({ payload }) {
  try {
    const { data } = yield call(requestFetchWallet, payload);
    yield put(actions.fetchListWalletSuccess(data.data));
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_LIST_WALLET, fetchWallet)]);
}

// Request Api
function requestFetchWallet(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");

  return axios({
    url: `${ROOT_API_URL}/admin/wallet/list${
      !_.isEmpty(payload) ? `?${queryParams}` : ""
    }`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}
