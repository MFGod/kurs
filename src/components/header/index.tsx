import styled from 'styled-components';
import { Button } from '../button';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  gap: 20px;

  margin: 48px;
`;

export const Header = () => {
  const languageContext = useContext(LanguageContext);
  
  return (
    <StyledHeader>
      <Button text="Смена языка" />
      <Button text="Смена темы" />
    </StyledHeader>
  );
};
