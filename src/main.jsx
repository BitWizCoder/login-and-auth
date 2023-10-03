import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import EmailSignup from "./Components/EmailSignUp";
import GoogleSignUp from "./Components/GoogleSignUp";
import GithubSignUp from "./Components/GithubSignUp";
import Home from "./Components/Home";
import EmailSignIn from "./Components/EmailSignIn";
import Email from "./Components/Email";
import ResetPassword from "./Components/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/email",
        element: <Email />,
      },
      {
        path: "/emailsignup",
        element: <EmailSignup />,
      },
      {
        path: "/emailsignin",
        element: <EmailSignIn />,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "/google",
        element: <GoogleSignUp />,
      },
      {
        path: "/github",
        element: <GithubSignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
