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


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement:<div>Error!!!!!!!!!</div>,
//
//     children:[
//
//       {
//         path: "/register",
//         element: <Register/>,
//       },
//       {
//         path: "/login",
//         element: <Login/>,
//       },
//       {
//         path: "/forgot_password",
//         element: <ForgotPassword/>,
//       },
//       {
//         path: "/set_new_password/:token",
//         element: <SetNewPassword/>,
//       },
//       {
//         path: "/check_email",
//         element: <CheckEmail/>,
//       },
//       {
//         path: "/packsList",
//         element: <PacksList/>,
//       },
//       {
//         path: "/profile",
//         element: <Profile/>,
//       },
//     ]
//
//   },
//
//
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error!!!!!!!!!</div>,
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
            path: "cards/:card_id",
            element: <Cards />
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