import { List } from 'components/AdditionalInformation/AdditionalInformation.styled';
import { Link } from 'react-router-dom';

export const SearchList = ({ resultsMovieList, location }) => (
  <List>
    {resultsMovieList.map(({ id, title }) => (
      <li key={id}>
        <Link to={`${id}`} state={{ from: location }}>
          {title}
        </Link>
      </li>
    ))}
  </List>
);
