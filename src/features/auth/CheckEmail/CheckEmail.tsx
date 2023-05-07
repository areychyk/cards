import React from "react";
import { ArgRegisterType } from "features/auth/auth.api";
import * as yup from "yup";
import { CompWrapperForAuth } from "common/components/CompWrapperForAuth/CompWrapperForAuth";
import { useSelector } from "react-redux";
import { selectEmailForForgotPassword } from "features/auth/CheckEmail/CheckEmail.selector";
import s from "features/auth/ForgotPassword/styles.module.css";
import Typography from "@mui/material/Typography";
import { Button } from "common/components/Button/Button";
import { useNavigate } from "react-router-dom";


export const CheckEmail = () => {
  const emailForForgotPassword = useSelector(selectEmailForForgotPassword);
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/login");
  };

  return (
    <CompWrapperForAuth title={"Check Email"}>
      <div className={s.textEmailAddress}>
        <Typography variant={"caption"}>We’ve sent an Email with instructions to {emailForForgotPassword} </Typography>
      </div>

      <Button onClick={navigateToSignIn}
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
        Back to login
      </Button>

    </CompWrapperForAuth>
  );
};
