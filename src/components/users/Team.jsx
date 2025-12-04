import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  { img: team1, name: "John Doe", role: "Master Chef" },
  { img: team2, name: "Mitchle Marsh ", role: "Sous Chef" },
  { img: team3, name: "Michael Brown", role: "Pastry Chef" },
  { img: team4, name: "Dany Wilson", role: "Restaurant Manager" },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-yellow-600 font-semibold uppercase tracking-wide mb-2">
            Our Team
          </h6>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Meet Our Experts
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />

              
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-yellow-500 bg-opacity-80 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                whileHover={{ y: 0 }}
              >
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-200 mb-3">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Facebook className="w-5 h-5 hover:text-blue-500 transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
                  <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
