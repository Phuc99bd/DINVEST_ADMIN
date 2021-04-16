import produce from "immer";
import * as types from "./types";

const initialState = {
  data: null,
};

export default function CustomerReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_LIST_CUSTOMER_SUCCESS:
        draft.data = payload;
        break;

      default:
        break;
    }
  });
}
