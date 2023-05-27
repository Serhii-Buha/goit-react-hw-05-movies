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
