import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import reservationImg from "../../assets/images/reservationImg.jpg";

const Reservation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="reservation" className="py-20 bg-gray-100">
      <div ref={ref} className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch">

        
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={reservationImg}
            alt="Reservation"
            className="w-full h-full object-cover"
          />
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-10 rounded-lg shadow-lg h-[500px] flex flex-col justify-center bg-white"
        >
          <h3 className="text-yellow-400 font-semibold uppercase tracking-wide mb-2 text-lg">
            Reservation
          </h3>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Book a Table Online
          </h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="datetime-local"
                className="w-full px-4 py-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="number"
                placeholder="No. of People"
                className="w-full px-4 py-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <textarea
              rows="3"
              placeholder="Special Request"
              className="w-full px-4 py-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button className="bg-yellow-400 text-orange-700 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300 w-full">
            Book Now
          </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Reservation;
