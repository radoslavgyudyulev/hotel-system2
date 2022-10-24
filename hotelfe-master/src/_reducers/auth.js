import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_ACCOUNT_DATA,
} from "../_actions/types";

const acessToken = JSON.parse(localStorage.getItem("acessToken"));

const initialState = acessToken
  ? { isLoggedIn: true, acessToken }
  : { isLoggedIn: false, acessToken: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, isLoggedIn: false };
    case REGISTER_FAIL:
      return { ...state, isLoggedIn: false };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, acessToken: payload };
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, acessToken: null };
    case LOGOUT:
      return { ...state, isLoggedIn: false, acessToken: null };
    default:
      return state;
  }
}
