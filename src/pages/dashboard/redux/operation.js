import { all, takeLatest, call, put } from "redux-saga/effects";
import _, { get } from "lodash";
import * as types from "./types";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";

function* fetchDashboard({ payload }) {
  try {
    const { data } = yield call(requestFetchDashboard);
    yield put(actions.fetchDashboardSuccess(data.data));
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_DASHBOARD, fetchDashboard)]);
}

// Request Api
function requestFetchDashboard(payload) {
  return axios({
    url: `${ROOT_API_URL}/admin/report/dashboard`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}
