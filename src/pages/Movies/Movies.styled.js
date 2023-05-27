import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SearchButtonInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  outline: none;
  padding: 5px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }

  border: 2px solid #20bcc6;
  -webkit-box-shadow: inset 0px 0px 10px #20bcc6;
  box-shadow: inset 0px 0px 10px #20bcc6;
  border-radius: 10px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: #1aa3a9;
  }

  font-size: 16px;
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #20bcc6;
  color: white;
  border: none;
  border-radius: 20px;
`;
