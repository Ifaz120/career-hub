import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/routes/Root.jsx';
import Root from './components/routes/Root.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ServiceDetails from './components/ServiceDetails/ServiceDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader:()=> fetch('/service.json')
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
  </AuthProvider>,
)
