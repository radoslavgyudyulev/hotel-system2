import { TRIGGER_SEARCHBAR } from "./types";

export const toggleSearchBar = (payload) => ({
  type: TRIGGER_SEARCHBAR,
  payload,
});
