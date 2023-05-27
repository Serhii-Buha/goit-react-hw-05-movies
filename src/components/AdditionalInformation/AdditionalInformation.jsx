import { Link } from 'react-router-dom';
import { List } from './AdditionalInformation.styled';

export const AdditionalInformation = () => (
  <>
    <p>
      <b>Additional information</b>
    </p>
    <List>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </List>
  </>
);
