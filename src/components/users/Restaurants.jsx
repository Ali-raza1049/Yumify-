import React from "react";
import { Clock, Star } from "lucide-react";
import { restaurants } from "../../data/Data";
import { Link } from "react-router-dom";

const Restaurants = () => {
  return (
    <div className="w-full px-6 mt-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Featured Restaurants</h2>
        <button className="text-red-500 hover:underline">View All →</button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {restaurants.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
          >
            <div className="relative">
              <img
                src={item.image}
                className="w-full h-48 object-cover rounded-lg"
                alt={item.name}
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {item.discount}
              </span>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.category}</p>

              <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{item.rating}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>

                <div>{item.price}</div>
              </div>

              {/* FIXED LINK */}
              <Link
                to={`/customer/view/${item.id}`}
                className="mt-4 inline-block w-full text-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
