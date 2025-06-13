import React from 'react'
import RootLayout from './components/RootLayout'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './features/authentication/Login'
import SignUp from './features/authentication/SignUp'
import Carts from './features/carts/Carts'
import HomePage from './features/home/HomePage'
import AdminPage from './features/admin/AdminPage'
import ProductAdd from './features/admin/ProductAdd'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/admin/dashboard',
          element: <AdminPage />,
        },
        {
          path: '/add-product',
          element: <ProductAdd />,
        },

        {
          path: '/cart',
          element: <Carts />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
