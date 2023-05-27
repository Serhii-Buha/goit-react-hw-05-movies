import PropTypes from 'prop-types';

export const FilmReviews = ({ resultsReviews }) => (
  <ul>
    {resultsReviews.map(({ id, author, content }) => (
      <li key={id}>
        <p>
          <b>Author: {author}</b>
        </p>
        <p>{content}</p>
      </li>
    ))}
  </ul>
);

FilmReviews.propTypes = {
  resultsReviews: PropTypes.array,
};
