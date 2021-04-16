import produce from "immer";
import * as types from "./types";

const initialState = {
  data: null,
};

export default function WalletReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_LIST_WALLET_SUCCESS:
        draft.data = payload;
        break;

      default:
        break;
    }
  });
}
