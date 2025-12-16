import React from "react";

import heroBg from "../../assets/images/bg-hero.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Restaurants from "../../components/users/Restaurants";
import PageLoad from "../../hooks/PageLoad";

const Menupage = () => {
  const pageLoaded = PageLoad();
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={pageLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative w-full  overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed "
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="relative flex flex-col md:flex-row justify-center items-center text-white h-64 bg-blue-950/90 sm:h-80 md:h-96">
          <div className=" justify-center text-left md:w-1/2 m-5 p-5 z-10">
            <h1
              className="text-5xl md:text-6xl font-
             bold mb-4 drop-shadow-lg leading-tight text-center font-mono"
            >
              Food Menu
            </h1>
          </div>
        </div>
      </motion.div>

      <Restaurants />
    </div>
  );
};

export default Menupage;
