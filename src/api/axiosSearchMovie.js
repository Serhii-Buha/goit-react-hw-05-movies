import axios from 'axios';

const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const baseURL = 'https://api.themoviedb.org/';

const axiosSearchMovies = async movieQuery => {
  try {
    // console.log(query);
    const response = await axios.get(
      `${baseURL}3/search/movie?query=${movieQuery}`,
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );

    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default axiosSearchMovies;

//v2

// import axios from 'axios';

// const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';

// const axiosOptions = {
//   baseURL: 'https://api.themoviedb.org/',
//   params: {
//     api_key: API_KEY,
//     language: 'en-US',
//   },
// };

// const axiosSearchMovies = async movieQuery => {
//   try {
//     // console.log(query);
//     const response = await axios.get(
//       `3/search/movie?query=${movieQuery}`,
//       axiosOptions
//     );

//     const data = await response.data;
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default axiosSearchMovies;
