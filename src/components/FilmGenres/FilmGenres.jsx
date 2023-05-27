import { List } from './FilmGenres.styled';

export const FilmGenres = ({ genres }) => (
  <List>
    {genres.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
      </li>
    ))}
  </List>
);
