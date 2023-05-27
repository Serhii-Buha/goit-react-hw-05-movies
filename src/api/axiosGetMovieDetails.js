import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTZkZmVjNWY0Yjg2YzcwZGEzYTg5NjY5NDI2OTIxOSIsInN1YiI6IjY0NmIxYzk3MzNhMzc2MDBlNjdiNjdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.soetT_SCyteJCJ0Ce-svzkrEAEk0bSxMGfT7ftm-M1M';

const axiosOptions = {
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

const axiosGetMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `3/movie/${movieId}?language=en-US`,
      axiosOptions
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default axiosGetMovieDetails;
