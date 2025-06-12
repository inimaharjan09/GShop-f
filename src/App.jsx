import React from 'react'
import RootLayout from './components/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import ProductList from './features/products/ProductList';
import Carts from './features/carts/Carts';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <ProductList/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/cart',
          element: <Carts/>
        }
      ]
    },
  ])
  return <RouterProvider router={router} />; 
}