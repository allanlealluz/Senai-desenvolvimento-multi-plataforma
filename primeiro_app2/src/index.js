import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Root from "./routes/rout";
import ErrorPage from './routes/error-page';
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
