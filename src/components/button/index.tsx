import { FC } from 'react';
import styled from 'styled-components';

interface ButtonInterface {
  text: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  font-size: 16px;
  text-transform: uppercase;

  padding: 12px 24px;

  border: none;

  background-color: ${(props) => props.theme.secondaryColor};

  color: ${(props) => props.theme.buttonColor};
`;

export const Button: FC<ButtonInterface> = ({ text, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </>
  );
};
