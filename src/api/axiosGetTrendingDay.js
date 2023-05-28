// import axios from 'axios';

// const API_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTZkZmVjNWY0Yjg2YzcwZGEzYTg5NjY5NDI2OTIxOSIsInN1YiI6IjY0NmIxYzk3MzNhMzc2MDBlNjdiNjdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.soetT_SCyteJCJ0Ce-svzkrEAEk0bSxMGfT7ftm-M1M';

// const axiosOptions = {
//   baseURL: 'https://api.themoviedb.org/',
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// const axiosGetTrendingDay = async () => {
//   try {
//     const response = await axios.get(
//       '3/trending/movie/day?language=en-US',
//       axiosOptions
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default axiosGetTrendingDay;

import axios from 'axios';

const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';

axios.defaults.baseURL = URL;

const axiosGetTrending = async () => {
  try {
    //  console.log(movieId);
    const response = await axios.get(`3/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default axiosGetTrending;
