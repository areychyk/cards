import React from "react";

import s from "./styles.module.css";
import { FormControl, FormGroup, Input, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { ArgForgotType, ArgLoginType, ArgRegisterType } from "features/auth/auth.api";
import { Button } from "common/components/Button/Button";
import { useAppDispatch } from "app/hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authThunks } from "features/auth/auth.slice";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { CompWrapperForAuth } from "common/components/CompWrapperForAuth/CompWrapperForAuth";


const schema = yup.object().shape({
  email: yup.string().required("Email is required").email()
});


type UseFormType = Omit<ArgRegisterType, "password">

export const ForgotPassword = () => {
  const dispatch = useAppDispatch();

const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UseFormType>({
    defaultValues: {
      email: ""

    },
    resolver: yupResolver(schema)
  });

  const onSubmitHandler = (data: UseFormType) => {
    // console.log(data);
    const payload: ArgForgotType = {
      email: data.email,
      from: "test-front-admin <ai73a@yandex.by>",
      message: `<div style="background-color: lime; padding: 15px">password recovery link:
 <a href="http://localhost:3000/set_new_password/$token$">link</a>
 </div>`
    };

    dispatch(authThunks.forgot(payload));
    console.log("forfot password");
    reset();
    if (!errors.email) {
      console.log('sdsd');
      navigate("/check_email");
    }

  };


  return (
    <CompWrapperForAuth title={"Forgot your password?"}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>

          <FormControl sx={{ width: "402px" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
              /*{...register('email')}*/
                   {...register("email")}
                   placeholder="Email"
                   required
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</p>
          </FormControl>


        </FormGroup>

        <div className={s.textEmailAddress}>
          <Typography variant={"caption"}>Enter your email address and we will send you further
            instructions </Typography>
        </div>


        <Button
          type={"submit"}
          style={{
            background: "#366EFF",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30px",
            marginTop: "65px",
            width: "100%",
            padding: "17px 0",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "500"
          }}
        >
          Send Instructions
        </Button>

        <div className={s.textRememberPassword}>
          <Typography variant={"caption"}>Did you remember your password?</Typography>
        </div>

        <NavLink to={"/login"} style={{ fontSize: "16px", fontWeight: "600" }}>
          Try logging in
        </NavLink>


      </form>
    </CompWrapperForAuth>
  );
};
