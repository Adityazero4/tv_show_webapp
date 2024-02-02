import { useReducer } from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import { ALL_SHOWS, SET_SINGLE_SHOW, CLEAR_SINGLE_SHOW } from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const allShows = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=all`
    );

    dispatch({
      type: ALL_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    console.log(data);

    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        allShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
