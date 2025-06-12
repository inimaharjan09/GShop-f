import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Typography, Input, } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaUserCircle } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import Profile from "./Profile";

export default function Header() {

  return (
    <Navbar className="bg-gray-200 px-5 py-5 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <Typography variant="h5" color="black" className="cursor-pointer">
            GShop
          </Typography>
        </Link>

        <div className="w-full md:w-1/3 relative">
          <Input
            label="Search product here"
            color="red"
            className="bg-white pr-10"
            crossOrigin=""
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-red-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Navigation */}
         <div className="flex gap-5 text-gray-800 items-center">
          <Link to="/cart" className="hover:underline">
            <MdShoppingBag  size={32} />
          </Link>
          <Link to="/login" className="hover:underline">
            <FaUserCircle size={32} />
          </Link>
          <Profile />
        </div>
        </div>
    </Navbar>
  );
}
