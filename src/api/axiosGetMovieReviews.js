import axios from 'axios';

const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const baseURL = 'https://api.themoviedb.org/';

const axiosGetMovieReviews = async movieId => {
  try {
    // console.log(movieId);
    const response = await axios.get(`${baseURL}3/movie/${movieId}/reviews?`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default axiosGetMovieReviews;
