import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// import Home from "./Home";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

const Home = lazy(() => import("./Home"));
const AboutUs = lazy(() => import("./AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));

const createdRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p className="loader">...loading</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<p className="loader">...loading</p>}>
            {" "}
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p className="loader">...loading</p>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <div>
            <h1>Page Not Found</h1>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={createdRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
