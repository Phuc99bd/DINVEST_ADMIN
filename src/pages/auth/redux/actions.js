import * as types from "./types";

export const postLogin = (payload, redirect) => ({
  type: types.LOGIN,
  payload,
  redirect,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const getProfile = (payload, redirect) => ({
  type: types.GET_PROFILE,
  payload,
  redirect,
});

export const getProfileSuccess = (payload, redirect) => ({
  type: types.GET_PROFILE_SUCCESS,
  payload,
  redirect,
});
