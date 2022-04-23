import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "30b880cb8af36a78b014f41021bfb163";

export const getFilms = async (page) => {
  const response = await axios.get(
    `/trending/movies/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
};
