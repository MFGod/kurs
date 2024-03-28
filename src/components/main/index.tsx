import { useContext } from "react";
import { Button } from "../button";
import { LanguageContext, TimerContext } from "../../App";
import { translation } from "../../translation/translation";
import styled from "styled-components";
import { Timer } from "../timer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 12px;
`;

const StyledButton = styled(Button)`
  width: 216px;
`;

const PrimaryTimer = styled(Timer)`
  font-size: 96px;
  color: #ffd600;
`;

const SecondaryTimer = styled(Timer)`
  color: ${(props) => props.theme.timerColor};
`;

export const Main = () => {
  const { language } = useContext(LanguageContext);
  const { handleStart, handleStop, count, theoryTime } =
    useContext(TimerContext);
  return (
    <Wrapper>
      <div>
        <div>
          <SecondaryTimer time={theoryTime} text={translation(language, "theory")} />
          <SecondaryTimer time={0} text={translation(language, "practice")} />
        </div>
        <PrimaryTimer time={count} />
      </div>

      <StyledBlock>
        <StyledButton
          onClick={handleStart}
          text={translation(language, "start")}
        />
        <StyledButton
          onClick={handleStop}
          text={translation(language, "pause")}
        />
      </StyledBlock>
      <StyledBlock>
        <StyledButton text={translation(language, "changeMode")} />
        <StyledButton text={translation(language, "closeSession")} />
      </StyledBlock>
    </Wrapper>
  );
};
