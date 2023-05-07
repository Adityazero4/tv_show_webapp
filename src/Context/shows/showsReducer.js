import {
  ALL_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case ALL_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    case SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.payload,
      };
    case CLEAR_SINGLE_SHOW:
      return {
        ...state,
        singleShow: {},
      };
    default:
      return state;
  }
};

export default showsReducer;
