import produce from "immer";
import * as types from "./types";

const initialState = {
  data: null,
};

export default function DashboardReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_DASHBOARD_SUCCESS:
        draft.data = payload;
        break;

      default:
        break;
    }
  });
}
