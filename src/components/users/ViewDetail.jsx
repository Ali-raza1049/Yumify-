import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantData } from "../../data/Data";
import { Clock, MapPin, Star, Phone } from "lucide-react";

const ViewDetails = () => {
  const { id } = useParams();
  const restaurant = restaurantData.find((r) => r.id === Number(id));

  const [activeCategory, setActiveCategory] = useState("All");

  if (!restaurant) {
    return <div className="p-10 text-xl">Restaurant not found.</div>;
  }

  return (
    <div className="w-full mb-10">
      
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img
          src={restaurant.banner}
          className="w-full h-full object-cover"
          alt="banner"
        />
      </div>

      {/* Basic Info */}
      <div className="px-6 mt-6">
        <h1 className="text-3xl font-semibold">{restaurant.name}</h1>
        <p className="text-gray-500 text-lg">{restaurant.category}</p>

        {/* Stats */}
        <div className="flex items-center gap-6 mt-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>{restaurant.rating} Rating</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-5 h-5" />
            <span>{restaurant.time}</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>{restaurant.distance}</span>
          </div>

          <div className="flex items-center gap-1 text-red-500 cursor-pointer">
            <Phone className="w-5 h-5" />
            <span>Contact Restaurant</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="px-6 mt-10 flex gap-6">
        {/* Sidebar Categories */}
        <div className="w-1/4 hidden md:block">
          <h3 className="text-lg font-semibold mb-3">Menu Categories</h3>

          <div className="flex flex-col gap-3">
            {restaurant.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg border ${activeCategory === cat
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurant.menu.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-xl shadow bg-white"
            >
              <img
                src={item.image}
                className="w-32 h-24 object-cover rounded-lg"
                alt={item.title}
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-red-500 font-semibold">
                    {item.price}
                  </span>

                  <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
