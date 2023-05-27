import { List } from 'components/AdditionalInformation/AdditionalInformation.styled';
import { Link } from 'react-router-dom';

export const FilmsTrendingList = ({ state }) => (
  <List>
    {state.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    ))}
  </List>
);
