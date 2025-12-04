import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cardsData } from "../../data/Data.js";

const Card = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  const bounceVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 12,
        mass: 0.6,
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef} id="features">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
        >
          {cardsData.map((card, idx) => (
            <motion.div
              key={idx}
              variants={bounceVariants}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:bg-orange-400 rounded-xl"
            >
              <div className="flex justify-center mb-4 ">
                <card.icon className={`${card.iconcolor} w-12 h-12`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Card;
