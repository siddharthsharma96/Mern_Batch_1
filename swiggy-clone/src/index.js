import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";
import Help from "./Pages/Help";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ProtectRoute from "./UI/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectRoute>
            {" "}
            <Home />
          </ProtectRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/help",
        element: (
          <ProtectRoute>
            {" "}
            <Help />
          </ProtectRoute>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: (
          <div>
            <h1>Page Not found</h1>
          </div>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
