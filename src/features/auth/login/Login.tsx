import React, { useState } from "react";

import s from "./styles.module.css";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper
} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";
import { Button } from "common/components/Button/Button";
import { useAppDispatch, useAppSelector } from "app/hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authThunks } from "features/auth/auth.slice";
import { NavLink, useNavigate } from "react-router-dom";
import { CompWrapperForAuth } from "common/components/CompWrapperForAuth/CompWrapperForAuth";

// export const Login = () => {
//   const dispatch = useAppDispatch();
//
//   useEffect(()=>{
//     dispatch(authThunks.login(payload))
//   },[])
//
//   const payload ={
//     email: "ariiychyk@gmail.com",
//     password: "6402413a",
//     rememberMe: false }
//   return (
//     <div>
//       sign-in or login
//     </div>
//   );
// };


const schema = yup.object().shape({
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters")
});





export const Login = () => {

  const error = useAppSelector((state) => state.app.error);

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ArgLoginType>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    resolver: yupResolver(schema)
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmitHandler = (data: ArgLoginType) => {
    console.log(data);
    dispatch(authThunks.login(data));
    reset();
    if(error !== null){
      navigate('/packsList')
    }

  };


  return (
    <CompWrapperForAuth title={"Sign in"}>
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

          <FormControlLabel
            sx={{ width: "100%", textAlign: "left" }}
            label={"Remember me"}
            control={<Checkbox {...register("rememberMe")} />}
          />
        </FormGroup>


        <NavLink to={"/forgot_password"}>
          <p className={s.textRecovery}> Forgot Password?</p>
        </NavLink>


        <Button
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
          Sign In
        </Button>

        <div className={s.text}>
          <Typography variant={"caption"}>Don't have an account?</Typography>
        </div>

        <NavLink to={"/register"} style={{ fontSize: "16px", fontWeight: "600" }}>
          Sign Up
        </NavLink>


      </form>
    </CompWrapperForAuth>
  );
};
