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
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import Resources from './components/Contact/Contact.jsx';
import Contact from './components/Contact/Contact.jsx';

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
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> ,
        loader:()=> fetch('/service.json')
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    
      {
        path: "/contact",
        element: <Contact></Contact>
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
