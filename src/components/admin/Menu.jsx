import React, { useState } from "react";
import { menuItems } from "../../data/Data";
import { FiSearch, FiFilter } from "react-icons/fi";
import { categories } from "../../data/Data"; 
import { Link } from "react-router-dom";

const Menu = () => {
  const [category, setCategory] = useState("All Categories");

  const filteredItems =
    category === "All Categories"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <div className="p-6">
      
      <h1 className="text-2xl font-semibold">Menu Items</h1>
      <p className="text-gray-500 mb-6">Manage Your Restaurant Menu</p>

      
      <div className="flex items-center justify-between mb-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-3 flex items-center gap-3">
          <FiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full outline-none"
          />

          
          <div className="relative">
            <FiFilter className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />

            <select
              className="border rounded-lg pl-8 pr-4 py-1.5 text-sm outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}   // ✔ FIXED
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <Link to="/add-item">
        <button className="ml-4 px-5 py-1.5
         rounded-xl text-white font-medium bg-linear-to-r from-purple-600 to-orange-500 shadow-md">
          + Add New Item
        </button>
        </Link> 
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              
              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                {item.status}
              </span>
            </div>

            {/* Category tag */}
            <div className="p-3">
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                {item.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
