import React, { useEffect } from "react";
import { useAppDispatch } from "app/hooks";

import { authThunks } from "features/auth/auth.slice";
import s from './styles.module.css'

export const Login = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(authThunks.login(payload))
  },[])

  const payload ={
    email: "ariiychyk@gmail.com",
    password: "6402413a",
    rememberMe: false }
  return (
    <div>
      sign-in or login
    </div>
  );
};

