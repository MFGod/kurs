import styled from 'styled-components';
import { Button } from '../button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  gap: 20px;

  margin: 48px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Button text="Смена языка" />
      <Button text="Смена темы" />
    </StyledHeader>
  );
};
