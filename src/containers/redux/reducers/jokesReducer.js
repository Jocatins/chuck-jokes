import { ActionTypes } from "../constants/action-types";

const initialState = {
  jokes: [],
};

export const jokesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_JOKES:
      return { ...state, jokes: payload };
    default:
      return state;
  }
};
