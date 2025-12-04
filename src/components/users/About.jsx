import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

import aboutImg1 from "../../assets/images/about-1.jpg";
import aboutImg2 from "../../assets/images/about-2.jpg";
import aboutImg3 from "../../assets/images/about-3.jpg";
import aboutImg4 from "../../assets/images/about-4.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (isInView) {
      let c1 = 0;
      let c2 = 0;

      const end1 = 15;
      const end2 = 50;
      const duration = 2000;

      const counter1 = setInterval(() => {
        c1++;
        setCount1(c1);
        if (c1 === end1) clearInterval(counter1);
      }, duration / end1);

      const counter2 = setInterval(() => {
        c2++;
        setCount2(c2);
        if (c2 === end2) clearInterval(counter2);
      }, duration / end2);
    }
  }, [isInView]);

  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="py-16 bg-gray-50" id="about">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE GRID */}
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img src={aboutImg1} className="w-full h-60 object-cover shadow-lg" />
            </motion.div>

            <motion.div
              className="flex justify-start items-end"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img src={aboutImg2} className="w-3/4 h-48 object-cover shadow-lg" />
            </motion.div>

            <motion.div
              className="flex justify-end items-start"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img src={aboutImg3} className="w-3/4 h-48 object-cover shadow-lg" />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img src={aboutImg4} className="w-full h-60 object-cover shadow-lg" />
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <div className="order-1 md:order-2">
            <h6 className="text-yellow-600 font-semibold uppercase mb-2 tracking-wide">
              About Us
            </h6>

            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Welcome to <span className="text-yellow-600">Yumify</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Yumify is a modern restaurant offering a fusion of global flavors.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              From burgers to desserts — there's something for everyone.
            </p>

            {/* COUNTER */}
            <div className="flex space-x-8 mb-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-600">{count1}</h3>
                <p className="text-gray-700 text-sm uppercase tracking-wide">
                  Years of Experience
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-600">{count2}</h3>
                <p className="text-gray-700 text-sm uppercase tracking-wide">
                  Popular Master Chefs
                </p>
              </div>
            </div>
            <button className="inline-block bg-yellow-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-yellow-700 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
