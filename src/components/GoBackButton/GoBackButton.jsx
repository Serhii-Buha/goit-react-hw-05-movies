import { Button, Link } from './GoBackButton.styled';

export const GoBackButton = ({ backLink }) => (
  <Link to={backLink.current}>
    <Button type="button">Go back</Button>
  </Link>
);
