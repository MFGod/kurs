import { FC } from 'react';
import styled from 'styled-components';


interface ButtonInterface {
  text: string;
}

const StyledButton = styled.button`
  font-size: 16px;
  text-transform: uppercase;

  padding: 12px 24px;

  border: none;
`;

export const Button: FC<ButtonInterface> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};
