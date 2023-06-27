import { createBrowserRouter } from "react-router-dom";
import App from "app/App";
import { PrivateRoutes } from "common/components/PrivateRoutes/PrivateRoutes";
import { PacksList } from "features/packsList/PacksList";
import { Profile } from "features/profile/Profile";
import { Login } from "features/auth/login/Login";
import { Register } from "features/auth/Register/Register";
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword";
import { SetNewPassword } from "features/auth/SetNewPassword/SetNewPassword";
import { CheckEmail } from "features/auth/CheckEmail/CheckEmail";
import React from "react";
import { Cards } from "features/cards/Cards";
import { LearnCards } from "features/cards/LearnCards/LearnCards";
import { PageNotFound } from "common/components/PageNotFound/PageNotFound";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes />,
        children: [
          {
            path: "packsList",
            element: <PacksList />
          },
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "cards/:packId",
            element: <Cards />
          },
          {
            path:"learnCards/:packId",
            element:<LearnCards/>
          },
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot_password",
        element: <ForgotPassword />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "set_new_password/:token",
        element: <SetNewPassword />
      },
      {
        path: "check_email",
        element: <CheckEmail />
      }
    ]
  }
]);