import React from "react";
import heroBg from "../../assets/images/bg-hero.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PageLoad  from "../../hooks/PageLoad"; 

const Contact = () => {
      const pageLoaded = PageLoad();
    
  return (
               <div className="relative w-full overflow-hidden">
             <motion.div
           initial={{ opacity: 0, x: -100 }}
           animate={pageLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative w-full"
             >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed "
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="relative flex flex-col md:flex-row justify-center items-center text-white h-64  bg-blue-950/90    sm:h-80 md:h-96">
          <div className="flex justify-center text-center md:w-1/2 m-5 p-5 z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight font-mono">
                Contact Us
            </h1>
          </div>
        </div>
      </motion.div>

      <div className="text-center mb-20 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 m-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 mt-2">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 m-6">
          <form className="space-y-5">

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 
                focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-orange-700 font-semibold py-3 rounded-lg 
              hover:bg-yellow-300 transition duration-300 mx-auto md:mx-0"
            >
              Send Message
            </button>
          </form>
        </div>

        
        <div className="rounded-2xl shadow-md overflow-hidden h-[350px] md:h-auto  mb-6">
        <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.860014203189!2d74.2610407746333!3d31.473036749480862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905ed9abd421d%3A0x2a6aed8d8b99ad6d!2sIIFA%20TECH!5e0!3m2!1sen!2s!4v1763534472910!5m2!1sen!2s"
      width="800"
      height="600"
     style={{ border: 0 }}
       allowFullScreen
        loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
