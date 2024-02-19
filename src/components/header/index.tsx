import styled from 'styled-components';
import { Button } from '../button';
import { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../App';
import { tranlation } from '../../translation/translation';

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  gap: 20px;

  margin: 48px;
`;

export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { changeTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <Button
        onClick={changeLanguage}
        text={tranlation(language, 'language')}
      />

      <Button onClick={changeTheme} text={tranlation(language, 'theme')} />
    </StyledHeader>
  );
};
