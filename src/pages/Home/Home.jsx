import React, { useState, useEffect } from 'react';
import axiosGetTrendingDay from 'api/axiosGetTrendingDay';
import { FilmsTrendingList } from 'components/FilmsTrendingList/FilmsTrendingList';

const Home = () => {
  const [trendingDay, setTrendingDay] = useState([]);

  useEffect(() => {
    axiosGetTrendingDay()
      .then(response => {
        if (response.results.length > 0) {
          setTrendingDay(response.results);
        } else {
          setTrendingDay([]);
        }
      })

      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {trendingDay.length > 0 && <FilmsTrendingList state={trendingDay} />}
    </>
  );
};

export default Home;
