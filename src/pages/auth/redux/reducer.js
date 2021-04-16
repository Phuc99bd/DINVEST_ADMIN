import produce from "immer";
import * as types from "./constants";
import { USER_INFO_KEY } from "commons/constants";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem(USER_INFO_KEY)) || {},
  dataOpenModalAuthy: null,
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        draft.userInfo = payload;
        break;
      case types.GET_PROFILE_SUCCESS: {
        draft.userInfo = payload;
        break;
      }
      default:
        break;
    }
  });
}
