import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "features/auth/login/Login";
import { Register } from "features/auth/Register/Register";
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword";
import { CheckEmail } from "features/auth/CheckEmail/CheckEmail";
import { SetNewPassword } from "features/auth/SetNewPassword/SetNewPassword";
import { PacksList } from "features/packsList/PacksList";
import { Profile } from "features/profile/Profile";
import { GlobalError } from "common/components/GlobalError/GlobalError";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<div>Error!!!!!!!!!</div>,
    children:[
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/forgot_password",
        element: <ForgotPassword/>,
      },
      {
        path: "/set_new_password/:token",
        element: <SetNewPassword/>,
      },
      {
        path: "/check_email",
        element: <CheckEmail/>,
      },
      {
        path: "/packsList",
        element: <PacksList/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
    ]

  },


]);

root.render(
    <Provider store={store}>
      {/*<App />*/}
      <RouterProvider router={router} />
      <GlobalError />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
