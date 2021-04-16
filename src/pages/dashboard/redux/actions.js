import * as types from "./types";

export const fetchDashboard = (payload) => ({
  type: types.FETCH_DASHBOARD,
  payload,
});

export const fetchDashboardSuccess = (payload) => ({
  type: types.FETCH_DASHBOARD_SUCCESS,
  payload,
});
