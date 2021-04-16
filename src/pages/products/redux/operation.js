import { all, takeLatest, call, put } from "redux-saga/effects";
import _, { get } from "lodash";
import * as types from "./types";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";

function* fetchProduct({ payload }) {
  try {
    const { data } = yield call(requestFetchProduct, payload);
    yield put(actions.fetchListProductSuccess(data.data));
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_LIST_PRODUCT, fetchProduct)]);
}

// Request Api
function requestFetchProduct(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");

  return axios({
    url: `${ROOT_API_URL}/admin/package/list${
      !_.isEmpty(payload) ? `?${queryParams}` : ""
    }`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}
