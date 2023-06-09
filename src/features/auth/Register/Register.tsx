

import React, { useState } from "react";

import s from "./styles.module.css";
import { FormControl, FormGroup, Input, InputAdornment, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { ButtonForAuth } from "common/components/ButtonForAuth/ButtonForAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authThunks } from "features/auth/auth.slice";
import { NavLink } from "react-router-dom";
import { CompWrapperForContent } from "common/components/CompWrapperForContent/CompWrapperForContent";
import { ArgRegisterType } from "features/auth/auth.api";
import { useAppDispatch } from "common/hooks";




const schema = yup.object().shape({
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
  confirmPassword: yup.string()
    .required('Password is mendatory')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

type UseFormType= {
  email: string
  password: string
  confirmPassword: string
}

export const Register = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UseFormType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword:""
    },
    resolver: yupResolver(schema)
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmitHandler = (data: ArgRegisterType) => {
    console.log(data);
    const payload:ArgRegisterType={
      email:data.email,
      password:data.password
    }
    dispatch(authThunks.register(payload));
    reset();
  };


  return (
    <CompWrapperForContent title={"Sign up"}>
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


          <FormControl sx={{ width: "402px" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input id="standard-adornment-password"
                   type={showPassword ? "text" : "password"}
                   {...register("password")}
                   placeholder="Password"
                   required
                   endAdornment={
                     <InputAdornment position={"end"}>
                       <IconButton
                         aria-label="toggle password visibility"
                         onClick={handleClickShowPassword}
                       >
                         {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityIcon />}
                       </IconButton>

                     </InputAdornment>
                   }
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.password?.message}</p>
          </FormControl>


          <FormControl sx={{ width: "402px" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-confirm-password">Confirm password</InputLabel>
            <Input id="standard-adornment-confirm-password"
                   type={showPassword ? "text" : "password"}
                   {...register("confirmPassword")}
                   placeholder="Confirm password"
                   required
                   endAdornment={
                     <InputAdornment position={"end"}>
                       <IconButton
                         aria-label="toggle password visibility"
                         onClick={handleClickShowPassword}
                       >
                         {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityIcon />}
                       </IconButton>

                     </InputAdornment>
                   }
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword?.message}</p>
          </FormControl>







        </FormGroup>



        <ButtonForAuth
          type={"submit"}
          style={{
            background: "#366EFF",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "30px",
            marginTop: "70px",
            width: "100%",
            padding: "17px 0",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "500"
          }}
        >
          Sign Up
        </ButtonForAuth>

        <div className={s.text}>
          <Typography variant={"caption"}>Already have an account?</Typography>
        </div>

        <NavLink to={"/login"} style={{ fontSize: "16px", fontWeight: "600" }}>
          Sign in
        </NavLink>


      </form>
    </CompWrapperForContent>
  );
};
