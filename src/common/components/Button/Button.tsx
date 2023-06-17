import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import s from "./styles.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

type Props = DefaultButtonPropsType & {
  xType?: "button" | "submit" | "reset" | undefined
  title: string
  onClickHandler?: () => void
  colorButton?:string

}




export const Button: FC<Props> = ({ onClickHandler, title,colorButton,xType }) => {
  return (
    <button type={xType??'button' } className={s.button} style={{background:`${colorButton??"#366EFF"}`, color:`${colorButton?'#000000':'#FFFFFF'}`}} onClick={onClickHandler}>

      {title}
    </button>
  );
};

