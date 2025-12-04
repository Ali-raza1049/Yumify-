
import React, { useState } from "react";
import {menuData} from "../../data/Data"
import BeefBurger from "../../assets/images/BeefBurger.jpeg";
import { Beef } from "lucide-react";





const Menu = () => {
  const [activeTab, setActiveTab] = useState("Pizza");

  

  return (
    <div className="w-full py-16 bg-white" id="menu">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
  <h5 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 animate-pulse">
    <span className="font-extrabold text-red-600">Yumify Menu</span>
  </h5>
  <h1 className="text-5xl font-extrabold mt-2 text-green-600 ">
    Our Delicious Selection
  </h1>
  <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
    Discover the flavors you love — freshly made, served hot, and crafted just for you.
  </p>
</div>

        
        <div className="flex justify-center gap-6 mb-10 border-b pb-4">
          {[
            { id: "Pizza", icon: "🍕", label: "Pizza" },
            { id: "Burger", icon: "🍔", label: "Burger" },
            { id: "Fries", icon: "🍟", label: "Fries" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 text-lg px-4 py-2 rounded-md transition-all duration-300
                ${activeTab === tab.id ? "bg-primary text-white" : " bg-green-800 text-white hover:bg-primary/80"}`}
            >
              <span className="text-2xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="ml-4 w-full">
                <div className="flex justify-between border-b pb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

                <button
                  className="mt-3 bg-primary text-white px-4 py-2 rounded-lg w-fit hover:bg-primary-dark transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
