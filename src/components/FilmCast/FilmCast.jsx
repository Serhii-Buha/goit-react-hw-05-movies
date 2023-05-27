const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const FilmCast = ({ creditsCast }) => (
  <ul>
    {creditsCast.map(({ id, profile_path, name, character }) => (
      <li key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : defaultImg
          }
          width={250}
          alt="path"
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
);
