import React from 'react';
import RootLayout from './components/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import HomePage from './features/home/HomePage';
import AdminPage from './features/admin/AdminPage';
import ProductAdd from './features/admin/ProductAdd';
import Product from './features/products/Product';
import Carts from './features/carts/Carts';
import ProfileMainPage from './features/user/ProfileMainPage';
import OrderDetail from './features/orders/OrderDetail';
import ProductEdit from './features/admin/ProductEdit';

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
          path: 'signup',
          element: <SignUp />,
        },

        //admin routes
        {
          path: 'admin/dashboard',
          element: <AdminPage />,
        },
        {
          path: 'admin/products/add',
          element: <ProductAdd />,
        },

        {
          path: 'admin/products/edit/:id',
          element: <ProductEdit />,
        },

        //product & cart
        {
          path: 'products/:id',
          element: <Product />,
        },
        {
          path: 'carts',
          element: <Carts />,
        },
        //user profile
        {
          path: 'user/profile',
          element: <ProfileMainPage />,
        },
        //order
        {
          path: 'orders/:id',
          element: <OrderDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
