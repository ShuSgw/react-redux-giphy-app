import axios from "axios";

const giphyApi = keyWords => {
  const search = keyWords;
  const key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
  const limit = 3;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;
  return axios.get(url);
};

export default giphyApi;
