import styled from 'styled-components';

export const Input = styled.input`
  display: inline-block;
  width: 280px;
  height: 30px;
  margin-top: 5px;
  border: 2px solid rgba(188, 184, 184, 0.989);
  padding-left: 20px;
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border: 2px solid rgb(75, 62, 142);
  }
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 60px;
  height: 36px;
  color: black;
  border: 2px solid rgba(188, 184, 184, 0.989);
  background-color: transparent;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
}

  &:hover,
  &:focus {
    opacity: 1;
    color: white;
    background-color: rgb(75, 62, 142);
  }
`;
