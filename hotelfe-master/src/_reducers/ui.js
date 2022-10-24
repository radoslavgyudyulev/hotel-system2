import { TRIGGER_SEARCHBAR } from "../_actions/types";

const initialState = {
  searchOpenMobile: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case TRIGGER_SEARCHBAR:
      return { ...state, searchOpenMobile: payload };
    default:
      return { ...state };
  }
};
