import React, { FC } from "react";

import s from "./styles.module.css";

type Props = {
  title: string
  onClickHandler: () => void
}


export const Button: FC<Props> = ({ onClickHandler, title }) => {
  return (
    <button className={s.button} onClick={onClickHandler}>

      {title}
    </button>
  );
};

