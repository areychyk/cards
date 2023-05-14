import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { router } from "common/router";
import { GlobalError } from "common/components/GlobalError";

const container = document.getElementById("root")!;
const root = createRoot(container);





root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <GlobalError />
  </Provider>
);

reportWebVitals();
