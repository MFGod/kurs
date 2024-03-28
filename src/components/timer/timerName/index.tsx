import { FC } from "react";

interface TimerNameInterface {
  text?: string;
}

export const TimerName: FC<TimerNameInterface> = ({ text }) => {
  return <h1>{text}</h1>;
};
