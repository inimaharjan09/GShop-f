import React from 'react';
import RootLayout from './components/RootLayout';
import { createBrowserRouter, Navigate } from 'react-router-dom';
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
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import { useSelector } from 'react-redux';
import Search from './features/search/Search';

export default function App() {
  const { user } = useSelector((state) => state.userSlice);
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
          element: user ? <Navigate to="/" /> : <Login />,
        },
        {
          path: 'signup',
          element: user ? <Navigate to="/" /> : <SignUp />,
        },

        //admin routes
        {
          element: <AdminRoute />,
          children: [
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
          ],
        },
        {
          path: 'search/:search',
          element: <Search />,
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
          element: <UserRoute />,
          children: [
            {
              path: 'user/profile',
              element: <ProfileMainPage />,
            },
          ],
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
