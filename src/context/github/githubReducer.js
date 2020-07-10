import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
} from "../types.js";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      break;
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
      break;
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;

    default:
      return state;
      break;
  }
};
