import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import EfectoPage from './EfectoPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/efecto-page',
    element: <EfectoPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>,
)
