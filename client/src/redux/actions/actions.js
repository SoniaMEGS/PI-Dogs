import { SET_DOGS, SET_LOADING, SET_SEARCHDOG, SET_FILTERING } from "./types";

export const setDogs = (payload) => ({
  type: SET_DOGS,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
export const setSearchDog = (payload) => ({
  type: SET_SEARCHDOG,
  payload,
});

export const setFiltering = (payload) => ({
  type: SET_FILTERING,
  payload,
});
