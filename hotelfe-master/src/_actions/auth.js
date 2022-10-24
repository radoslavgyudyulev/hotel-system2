import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  SET_ACCOUNT_DATA,
} from "./types";

import { localStorageSet, localStorageRemove } from "utils/localStorage";

const API_URL = "http://localhost:8000";

export const register =
  (username, email, password, callback) => async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/signup`, {
        username,
        email,
        password,
      });
      dispatch({ type: REGISTER_SUCCESS });
      dispatch({ type: SET_MESSAGE, payload: data.message });
      login(username, password);
      callback && callback();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({ type: REGISTER_FAIL });
      dispatch({ type: SET_MESSAGE, payload: message });
    }
  };

export const login = (username, password) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(`${API_URL}/api/auth/signin`, {
      username,
      password,
    });
    if (data.accessToken && status === 200) {
      localStorageSet("acessToken", JSON.stringify(data.accessToken));
      localStorageSet("roles", JSON.stringify(data.roles));
      localStorageSet("userId", JSON.stringify(data.id));

      dispatch({ type: LOGIN_SUCCESS, payload: data.accessToken });
      dispatch({
        type: SET_ACCOUNT_DATA,
        payload: {
          email: data.email,
          userId: data.id,
          username: data.username,
          roles: data.roles,
        },
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({ type: LOGIN_FAIL });
    dispatch({ type: SET_MESSAGE, payload: message });
  }
};

export const logout = () => (dispatch) => {
  localStorageRemove("acessToken");
  dispatch({ type: LOGOUT });
};
