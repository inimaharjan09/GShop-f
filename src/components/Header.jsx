import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Typography, Input, Button } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MdShoppingBag } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Profile from './Profile';

export default function Header() {
  const { user } = useSelector((state) => state.userSlice);
  const [searchQuery, setSearchQuery] = useState('');

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
        <div className="w-full md:w-1/3 relative">
          <Input
            label="Search product here"
            color="red"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white pr-10"
            crossOrigin=""
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-red-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          {user && (
            <Link to="/carts" className="hover:text-red-500 transition">
              <MdShoppingBag size={28} />
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
