import styled from 'styled-components';
import { Button } from '../button';
import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { tranlation } from '../../translation/translation';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Main = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      <Wrapper>
        <ButtonRow>
          <Button text={tranlation(language, 'start')} />
          <Button text={tranlation(language, 'pause')} />
        </ButtonRow>
        <ButtonRow>
          <Button text={tranlation(language, 'changeMode')} />
          <Button text={tranlation(language, 'closeSession')} />
        </ButtonRow>
      </Wrapper>
    </div>
  );
};
