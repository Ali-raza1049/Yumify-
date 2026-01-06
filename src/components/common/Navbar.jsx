import React, { useState } from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import PageLoad from "../../hooks/PageLoad";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsOpen(false);
    navigate("/signin");
  };

  const pageLoaded = PageLoad();

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="relative z-50">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={pageLoaded ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full top-0 left-0 bg-blue-950/80 backdrop-blur-sm text-white shadow-md py-4 px-6 md:px-10 flex items-center justify-between z-50"
      >
        <div className="text-2xl font-bold hover:text-yellow-300 transition duration-300 cursor-pointer shrink-0">
          🍽️ Yumify
        </div>

        {/* Center: Search bar */}
        <div className="hidden md:flex flex-1 justify-center mx-6">
          <div className="relative w-full max-w-sm">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
            />
          </div>
        </div>

        {/* Right: Links + Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-bold text-lg">
            <li className="hover:text-yellow-300 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 transition">
              <Link to="/customer/restaurants">Restaurants</Link>
            </li>
            <li className="hover:text-yellow-300 transition">
              <Link to="/customer/contact">Contact</Link>
            </li>
          </ul>

          <Link to="/customer/addcart">
            <ShoppingCartIcon className="w-7 h-7 cursor-pointer hover:text-yellow-300 transition" />
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition"
            > Logout </button>
          ) : (
            <Link to="/signin">
              <button className="bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition">
                Sign In
              </button>
            </Link>
          )}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-16 left-0 w-full bg-blue-950/95 backdrop-blur-lg text-white px-6 py-6 space-y-4 z-40 shadow-lg"
        >
          <div className="relative w-full">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 pl-10 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />
          </div>

          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li className="hover:text-yellow-300 transition">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-300 transition">
              <Link to="/customer/restaurants" onClick={handleLinkClick}>
                Restaurants
              </Link>
            </li>
            <li className="hover:text-yellow-300 transition">
              <Link to="/customer/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
             
          <Link to="/customer/addcart">
            <ShoppingCartIcon className="w-7 h-7 cursor-pointer hover:text-yellow-300 transition" />
          </Link>          
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition"
            > Logout </button>
          ) : (
            <Link to="/signin" onClick={handleLinkClick}>
              <button className="w-full bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition">
                Sign In
              </button>
            </Link>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
