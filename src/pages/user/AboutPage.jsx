import React, { useState, useEffect } from "react";
import About from "../../components/users/About";
import heroBg from "../../assets/images/bg-hero.jpg";
import { motion } from "framer-motion";
import PageLoad  from "../../hooks/PageLoad"; 

const Aboutpage = () => {
    
    const pageLoaded = PageLoad();
  return (
    <div className="relative w-full">
      {/* Hero / Background Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={pageLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative w-full overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Overlay */}
        <div className="relative flex flex-col justify-center items-center text-white h-64 sm:h-80 md:h-96 bg-blue-950/80">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight text-center font-mono">
            About Us
          </h1>
        </div>
      </motion.div>

      {/* About Component */}
      <div className="relative z-10">
        <About />
      </div>
    </div>
  );
};

export default Aboutpage;
