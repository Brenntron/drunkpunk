import { useReducer } from "react";

const defaultState = {};

function fetchReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "FETCH_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        hasError: false,
        beers: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default fetchReducer;
