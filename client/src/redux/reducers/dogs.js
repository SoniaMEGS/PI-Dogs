import {
  SET_DOGS,
  SET_LOADING,
  SET_SEARCHDOG,
  SET_FILTERING,
} from "../actions/types";

const initialState = {
  dogs: [],
  searchDogs: [],
  filtering: false,
  loading: false,
};

export const dogsReducer = (state = initialState, actios) => {
  switch (actios.type) {
    case SET_DOGS:
      return { ...state, dogs: actios.payload };
    case SET_SEARCHDOG:
      return { ...state, searchDogs: actios.payload };
    case SET_LOADING:
      return { ...state, loading: actios.payload };
    case SET_FILTERING:
      return { ...state, filtering: actios.payload };
    default:
      return state;
  }
};
