import { all, takeLatest, call, put } from "redux-saga/effects";
import _, { get } from "lodash";
import * as types from "./types";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";

function* fetchTransaction({ payload }) {
  try {
    const { data } = yield call(requestFetchTransaction, payload);
    yield put(actions.fetchListTransactionSuccess(data.data));
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_LIST_TRANSACTION, fetchTransaction)]);
}

// Request Api
function requestFetchTransaction(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");

  return axios({
    url: `${ROOT_API_URL}/admin/wallet-trans/list${
      !_.isEmpty(payload) ? `?${queryParams}` : ""
    }`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}
