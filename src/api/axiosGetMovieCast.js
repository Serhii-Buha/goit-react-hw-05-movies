import axios from 'axios';

const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';

const baseURL = 'https://api.themoviedb.org/';

const axiosGetMovieCast = async movieId => {
  try {
    const response = await axios.get(`${baseURL}3/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default axiosGetMovieCast;
