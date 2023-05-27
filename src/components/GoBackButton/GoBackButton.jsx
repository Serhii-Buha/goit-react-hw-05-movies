import PropTypes from 'prop-types';
import { Button, Link } from './GoBackButton.styled';

export const GoBackButton = ({ backLink }) => (
  <Link to={backLink.current}>
    <Button type="button">Go back</Button>
  </Link>
);

GoBackButton.propTypes = {
  backLink: PropTypes.object,
};
