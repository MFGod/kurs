import { FC } from "react";

interface ButtonInterface {
   text: string;
}

export const Button:FC<ButtonInterface> = ({text}) => {
  return <button>{text}</button>;
};
