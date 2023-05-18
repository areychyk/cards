import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ArgRegisterType, ArgSetNewPasswordType } from "features/auth/auth.api";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authThunks } from "features/auth/auth.slice";
import { CompWrapperForContent } from "common/components/CompWrapperForContent/CompWrapperForContent";
import { useNavigate, useParams } from "react-router-dom";
import { FormControl, FormGroup, Input, InputAdornment, InputLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import s from "features/auth/login/styles.module.css";
import { Button } from "common/components/Button/Button";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "common/hooks";


const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters")
});


type UseFormType = Omit<ArgRegisterType, "email">

export const SetNewPassword = () => {


  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const {token}=useParams()


  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UseFormType>({
    defaultValues: {
      password: ""

    },
    resolver: yupResolver(schema)
  });



  const onSubmitHandler = (data: UseFormType) => {
    const payload:ArgSetNewPasswordType={
      password:data.password,
      resetPasswordToken:token
    }

    dispatch(authThunks.setNewPassword(payload));
    reset();
    if (!errors.password) {

      navigate("/login");
    }

  };
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <CompWrapperForContent title={"Forgot your password?"}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>



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


        </FormGroup>

        <div className={s.text}>
          <Typography variant={"caption"}>Create new password and we will send you further instructions to email</Typography>
        </div>


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


      </form>
    </CompWrapperForContent>
  );
};
