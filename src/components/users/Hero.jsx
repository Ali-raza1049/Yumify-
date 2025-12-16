import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";
import heroBg from "../../assets/images/bg-hero.jpg";
import {Link} from 'react-router-dom';
import PageLoad from '../../hooks/PageLoad';
const Hero = () => {
  
    const pageLoaded = PageLoad();
   
  
    const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content */}
      <div className="relative flex flex-col-reverse md:flex-row justify-center items-center text-white h-full bg-blue-950/90">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={pageLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col justify-center text-center md:text-left md:w-1/2 m-4 md:m-10 p-4 md:p-0 z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            Delicious Food <br /> Delivered Fresh 🍽️
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0">
            Experience the taste of happiness with Yumify — your favorite
            dishes made with love and delivered hot!
          </p>

         <Link to="/signin">
            <button
              className="bg-yellow-400 text-orange-700 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition w-full"
              onClick={handleLinkClick}
            >
              Sign In
            </button>
            </Link>
        </motion.div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <motion.img
            src={heroImg}
            alt="Delicious food"
            className="w-72 sm:w-80 md:w-[90%] max-w-md rounded-2xl relative z-20"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
