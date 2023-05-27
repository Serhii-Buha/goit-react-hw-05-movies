const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const Poster = ({ poster_path }) => (
  <img
    src={
      poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : defaultImg
    }
    width={250}
    alt="poster"
  />
);
