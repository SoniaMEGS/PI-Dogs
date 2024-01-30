import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getDog = () => {
  return (
    axios
      .get(`${API_URL}/?api_key=${API_KEY}`)
      //.get(`${API_URL}/?`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  );
};

export const getDogByName = ({ name }) => {
  return (
    axios
      .get(`${API_URL}/search?q=${name}&api_key=${API_KEY}`)
      //.get(`${API_URL}/search?q=${name}`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  );
};

export const getTemperaments = async () => {
  try {
    const response = await axios.get(`${API_URL}/temperaments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching temperaments:", error);
    throw error; // Re-throw the error so it can be caught by the caller if needed
  }
};
