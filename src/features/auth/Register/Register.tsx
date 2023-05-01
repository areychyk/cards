import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from 'features/auth/Register/styles.module.css'
import { ArgRegisterType } from "features/auth/auth.api";

export const Register = () => {
  const dispatch = useAppDispatch();

  const registerHandler = () => {
    const payload:ArgRegisterType={
      email: "ariiychyk@gmail.com",
      password: "6402413a"
    };
    dispatch(authThunks.register(payload));
  };

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};

