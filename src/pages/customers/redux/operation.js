import { all, takeLatest, call, put } from "redux-saga/effects";
import _, { get } from "lodash";
import * as types from "./types";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";

function* fetchCustomer({ payload }) {
  try {
    const { data } = yield call(requestFetchCustomer, payload);
    yield put(actions.fetchListCustomerSuccess(data.data));
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_LIST_CUSTOMER, fetchCustomer)]);
}

// Request Api
function requestFetchCustomer(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");

  return axios({
    url: `${ROOT_API_URL}/admin/customer/list${
      !_.isEmpty(payload) ? `?${queryParams}` : ""
    }`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}
