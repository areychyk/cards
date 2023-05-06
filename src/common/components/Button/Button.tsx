import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import s from 'common/components/Button/styles.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  >

type Props = DefaultButtonPropsType & {
  xType?: string
}

export const Button: FC<Props> = ({
                                            xType,
                                            className,
                                            disabled,
                                            ...restProps }) => {
  const finalClassName =(
    s.button +
    (disabled ? ` ${s.disabled}` : ' '))

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};
