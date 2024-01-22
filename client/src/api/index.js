import axios from "axios";

export const getDog = () => {
  return axios
    .get(
      "https://api.thedogapi.com/v1/breeds/?api_key=live_uS5Jb5CCc3boYDgvgbZ9b5o5fX1XmrHMogTXrxH1gjZUu7AMJqtsgg38uwOIq9aO"
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
