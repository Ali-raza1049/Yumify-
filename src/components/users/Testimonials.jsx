import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {testimonials} from "../../data/Data"

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h6 className="text-yellow-600 font-semibold uppercase tracking-wide mb-2">
            Testimonials
          </h6>
          <h2 className="text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
