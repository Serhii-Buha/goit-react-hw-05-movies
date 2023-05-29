import PropTypes from 'prop-types';
import axiosGetMovieReviews from 'api/axiosGetMovieReviews';
import { FilmReviews } from 'components/FilmReviews/FilmReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState({});

  const resultsReviews = reviews.results;

  useEffect(() => {
    if (!movieId) return;

    axiosGetMovieReviews(movieId)
      .then(response => {
        if (response) {
          setReviews(response);
        } else {
          setReviews({});
        }
      })

      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      {resultsReviews?.length > 0 ? (
        <FilmReviews resultsReviews={resultsReviews} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.object,
};
