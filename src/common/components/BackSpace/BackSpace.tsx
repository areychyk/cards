import React, { FC } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import s from './styles.module.css'

type Props={
  title:string
  onClickHandler:()=>void
}

export const BackSpace:FC<Props> = ({title,onClickHandler}) => {
  return (
    <div className={s.backspace} onClick={onClickHandler}>
      <KeyboardBackspaceIcon/>
      <p className={s.textBackSpace}>{title}</p>

    </div>
  );
};

