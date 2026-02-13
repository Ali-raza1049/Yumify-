import React from "react";
import { motion } from "framer-motion";

export  function StatCard({ title, value, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-2xl shadow p-4 flex flex-col gap-2 bg-white">
        <div className="p-0 flex flex-col gap-1">
          <div className="text-2xl">{icon}</div>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
export default StatCard;