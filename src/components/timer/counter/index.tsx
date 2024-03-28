import { FC } from "react";
import styled from "styled-components";

interface CounterInterface {
  time: number;
  className?: string;
}


export const Counter: FC<CounterInterface> = ({ time, className }) => {
  const convertTime = (time: number) => {
    return new Date(0, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return <h1 className={className}>{convertTime(time)}</h1>;
};
