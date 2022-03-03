import { ActionTypes } from "../constants/action-types";

export const setJokes = (jokes) => {
  return {
    type: ActionTypes.SET_JOKES,
    payload: jokes,
  };
};
export const selectedJoke = (joke) => {
  return {
    type: ActionTypes.SELECTED_JOKE,
    payload: joke,
  };
};
