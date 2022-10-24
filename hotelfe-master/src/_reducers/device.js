import {
  isMobileOnly,
  isTablet,
  osName,
  browserName,
  browserVersion,
  mobileModel,
  deviceType,
} from "react-device-detect";

const initialState = {
  isMobile: isMobileOnly,
  isTablet,
  os: osName,
  browserName,
  browserVersion,
  mobileModel,
  deviceType,
};

export default (state = initialState) => {
  return state;
};
