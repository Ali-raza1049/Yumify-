import React, { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageloaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={pageloaded ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full top-0 left-0 text-white bg-blue-950/80 backdrop-blur-sm shadow-md py-4 px-6 md:px-10 flex justify-between items-center z-50"
      >
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
          🍽️ Yumify
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300 font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300 font-bold text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300 font-bold text-lg">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300 font-bold text-lg">
            <Link to="/service">Services</Link>
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300 font-bold text-lg">
            <Link to="/team">Team</Link>
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300 font-bold text-lg">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

       <div className="hidden md:flex items-center space-x-4">
      <Link to="/addcart">
      <ShoppingCartIcon className="w-7 h-7 cursor-pointer hover:text-yellow-300 transition duration-300" />
     </Link>
      <Link to="/signin">
     <button className="bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition duration-300">
       Sign In
      </button>
       </Link>

  <button className="bg-yellow-400 text-orange-700 font-bold px-5 py-2 rounded hover:bg-yellow-300 transition duration-300">
    Book Table
  </button>
</div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed top-16 left-0 w-full bg-blue-950/95 backdrop-blur-lg text-white px-6 py-6 space-y-4 z-40 shadow-lg"
          >
            <ul className="flex flex-col space-y-4 text-lg font-semibold">
              <li className="hover:text-yellow-300 transition duration-300">
                <Link to="/" >Home</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300">
                <Link to="/about" >About</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300">
                <Link to="/menu" >Menu</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300">
                <Link to="/service" >Services</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300">
                <Link to="/team" >Team</Link>
              </li>
              <li className="hover:text-yellow-300 transition duration-300">
                <Link to="/contact" >Contact</Link>
              </li>
            </ul>
          <Link to="/signin">
            <button className="bg-yellow-400 text-orange-700 font-bold px-6 py-3 rounded         hover:bg-yellow-300 transition duration-300 w-full">
              Sign In
             </button>
           </Link>
            <button className="bg-yellow-400 text-orange-700 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300 w-full mt-4">
              Book Table
            </button>
          </motion.div>
        )}
      
    </div>
  );
};

export default Navbar;
