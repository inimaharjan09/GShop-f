import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Typography, Input, Button } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MdShoppingBag } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import SeachCompo from '../features/search/SeachCompo';

export default function Header() {
  const { user } = useSelector((state) => state.userSlice);
  const { carts } = useSelector((state) => state.cartSlice);
  const [searchQuery, setSearchQuery] = useState('');
  const nav = useNavigate();

  return (
    <Navbar className="bg-gray-200 px-5 py-4 shadow-md rounded-none">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <Typography
            variant="h5"
            color="black"
            className="cursor-pointer hover:text-red-500 transition"
          >
            GShop
          </Typography>
        </Link>

        {/* Search Bar */}
        <SeachCompo />
        {/* Navigation Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          {user && (
            <Link
              to="/carts"
              className="relative hover:text-red-500 transition"
            >
              <MdShoppingBag size={28} />
              {carts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {carts.length}
                </span>
              )}
            </Link>
          )}

          {user ? (
            <Profile user={user} />
          ) : (
            <NavLink to="/login">
              <Button size="sm" variant="text" className="p-0 m-0">
                Login
                {/* <FaUserCircle size={28} className="text-gray-800 hover:text-red-500 transition" /> */}
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </Navbar>
  );
}
