import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/restaurants");
        setRestaurants(res.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="w-full px-6 mt-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Restaurants</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {restaurants.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
          >
            {/* IMAGE */}
            <div className="relative">
              {item.image ? (
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                  🍽️
                </div>
              )}

              <span
                className={`absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full ${
                  item.status === "Active"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.cuisine}</p>

              <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
                <MapPin className="w-4 h-4" />
                <span>{item.address}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span>Orders: {item.orders}</span>
                <span>Revenue: {item.revenue}</span>
              </div>

              <Link
                to={`/customer/view/${item._id}`}
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
