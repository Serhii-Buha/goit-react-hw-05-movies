import PropTypes from 'prop-types';
import axiosGetMovieCast from 'api/axiosGetMovieCast';
import { FilmCast } from 'components/FilmCast/FilmCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  const [credits, setCredits] = useState({});

  const creditsCast = credits.cast;

  useEffect(() => {
    if (!movieId) return;

    axiosGetMovieCast(movieId)
      .then(response => {
        if (response) {
          setCredits(response);
        } else {
          setCredits({});
        }
      })

      .catch(err => console.error(err));
  }, [movieId]);

  return <div>{creditsCast && <FilmCast creditsCast={creditsCast} />}</div>;
};

export default Cast;

Cast.propTypes = {
  credits: PropTypes.object,
};
