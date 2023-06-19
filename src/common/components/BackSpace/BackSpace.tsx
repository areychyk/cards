import React, { FC } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import s from './styles.module.css'

type Props={
  title:string
  onClickHandler:()=>void
}

export const BackSpace:FC<Props> = ({title,onClickHandler}) => {
  return (
    <div className={s.backspace} >
      <KeyboardBackspaceIcon onClick={onClickHandler}/>
      <p className={s.textBackSpace} onClick={onClickHandler}>{title}</p>

    </div>
  );
};

