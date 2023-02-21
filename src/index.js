import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import { Provider } from "react-redux";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Policies from "./pages/Policies";
import LandingPage from "./pages/Landingpage";
import Policy from "./components/Policy/Policy";
import Dashboard from "./components/Dashboard/Dashboard";
import NewPolicy from "./components/Policy/NewPolicy";
import ProtectedRoute from "./components/ProtectedRoute";
import RegistrationForm from "./pages/RegistrationForm";

import "./index.css";

import { store } from "./store/store";

const AppLayout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <LandingPage>
            <Policy />
          </LandingPage>
        ),
      },
      {
        path: "/login",
        element: (
          <LandingPage>
            <Login />
          </LandingPage>
        ),
      },
      {
        path: "/registration",
        element: (
          <LandingPage>
            <RegistrationForm/>
          </LandingPage>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <App>
              <Dashboard marginTop="175px" />
            </App>
          </ProtectedRoute>
        ),
      },
      {
        path: "/new-policy",
        element: (
          <ProtectedRoute>
            <App>
              <NewPolicy
                bg="#fff"
                margin="75px"
                padding="60px"
                radius="10px"
                shadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
              />
            </App>
          </ProtectedRoute>
        ),
      },
      {
        path: "/policies",
        element: (
          <ProtectedRoute>
            <App>
              <Policies
                bg="#fff"
                margin="75px"
                padding="60px"
                radius="10px"
                shadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
              />
            </App>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
