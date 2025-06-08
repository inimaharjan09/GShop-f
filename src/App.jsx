import React from 'react'
import RootLayout from './components/RootLayout'
import { createBrowserRouter } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
      ]
    },
  ])
}

