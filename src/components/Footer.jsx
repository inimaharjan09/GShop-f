import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Typography variant="h5" className="text-black-900 mb-2">GShop</Typography>
          <Typography variant="small" className="text-gray-600">
            Your one-stop shop for the latest tech gadgets and accessories.
          </Typography>
        </div>
        <div>
          <Typography variant="h6" className="text-black-900 mb-3">Quick Links</Typography>
          <ul className="space-y-2 text-gray-600">
            <li>
            <Link to="/" className="hover:text-black-700">Home</Link></li>
            <li><a href="#" className="hover:text-black-700">Shop</a></li>
          </ul>
        </div>


        <div>
          <Typography variant="h6" className="text-black-900 mb-3">Connect with Us</Typography>
          <div className="flex space-x-4 text-gray-600">
            <a href="#"><FaFacebook className="hover:text-blue-700" size={20} /></a>
            <a href="#"><FaTwitter className="hover:text-blue-700" size={20} /></a>
            <a href="#"><FaInstagram className="hover:text-blue-700" size={20} /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-700" size={20} /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GadgetShop. All rights reserved.
      </div>
    </footer>
  );
}
