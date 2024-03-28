import { FC } from "react";
import { TimerName } from "./timerName";
import { Counter } from "./counter";

interface TimerInterface {
  text?: string;
  time: number;
  className?: string;
}

export const Timer: FC<TimerInterface> = ({ text, time, className }) => {
  return (
    <div>
      <TimerName text={text} />
      <Counter className={className} time={time} />
    </div>
  );
};
