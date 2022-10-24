import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import ui from "./ui";
import account from "./account";
import device from "./device";

export default combineReducers({
  auth,
  account,
  message,
  device,
  ui,
});
