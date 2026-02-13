import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/Config";
import { getActiveRestaurants } from "../../redux/slice/RestaurantSlice";

const Restaurants = () => {
  const dispatch = useDispatch();

  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurant,
  );

  const { token } = useSelector((state) => state.auth); 

  
  useEffect(() => {
    dispatch(getActiveRestaurants());
  }, [dispatch]);

  

  if (loading) {
    return (
      <div className="text-center p-10 text-xl">Loading restaurants...</div>
    );
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  
  if (!restaurants.length) {
    return (
      <div className="text-center p-10 text-gray-500">
        No restaurants available
      </div>
    );
  }

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
                  src={`${IMAGE_BASE_URL}${item.image}`}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg text-3xl">
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
                <span>Orders: {item.orders ?? 0}</span>
                <span>Revenue: {item.revenue ?? "$0"}</span>
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
