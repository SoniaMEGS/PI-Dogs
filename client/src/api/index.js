import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getDog = () => {
  return axios
    .get(`${API_URL}/?api_key=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getDogByName = ({ name }) => {
  return axios
    .get(`${API_URL}/search?q=${name}&api_key=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
