import axios from 'axios';
const API_KEY = 'a12b15569070d5f59a588b24befedb0f';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieAdd = async (movieId, param) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/${param}?api_key=${API_KEY}`
    );
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesByQuery = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
