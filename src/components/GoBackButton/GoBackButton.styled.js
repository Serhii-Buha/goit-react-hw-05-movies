import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
`;

export const Button = styled.button`
  color: #fff;
  cursor: pointer;
  background-color: #20bcc6;
  border: none;
  border-radius: 20px;
  margin: 5px 0;

  padding: 8px 16px;
  font-size: 16px;
  display: inline-block;

  &:hover {
    background-color: #1aa3a9;
  }
`;
