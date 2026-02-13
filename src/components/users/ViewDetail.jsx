import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  clearSelectedRestaurant,
} from "../../redux/slice/RestaurantSlice";
import { getMenuItems } from "../../redux/slice/MenuSlice";
import { toast } from "react-hot-toast";
import { IMAGE_BASE_URL } from "../../utils/Config";
const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedRestaurant: restaurant, loadingDetail } = useSelector(
    (state) => state.restaurant
  );
  const { menuItems, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getRestaurantById(id));
    dispatch(getMenuItems(id));

    return () => {
      dispatch(clearSelectedRestaurant());
    };
  }, [dispatch, id]);

  if (loadingDetail || !restaurant) {
    return <div className="p-10 text-xl">Loading restaurant details...</div>;
  }
  // ViewDetails.jsx
 const handleAddToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  
  if (cart.length > 0 && cart[0].restaurantId !== restaurant._id) {
    toast.error("You can order from only one restaurant at a time");
    return;
  }

  const existingItem = cart.find((cartItem) => cartItem._id === item._id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1,
      restaurantId: restaurant._id,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
  toast.success(`${item.name} added to cart!`);
};
  return (
    <div className="w-full pb-16">
      {/* Restaurant Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={`${IMAGE_BASE_URL}${restaurant.image}`}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">{restaurant.name}</h1>
          <p className="mt-1 text-lg">{restaurant.cuisine}</p>
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">4.5 Rating</span>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-red-500" />
            <span className="text-gray-700">{restaurant.address}</span>
          </div>
          <div className="text-gray-700">
            <strong>Status:</strong> {restaurant.status}
          </div>
          <div className="text-gray-700">
            <strong>Orders:</strong> {restaurant.orders}
          </div>
        </div>

        {/* Menu Section */}
        <h2 className="text-2xl font-bold mt-10 mb-6">🍽️ Popular Menu</h2>

        {loading ? (
          <div className="text-center text-xl py-10">Loading menu...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={
                      item.image
                        ? `${IMAGE_BASE_URL}${item.image}`
                        : "/placeholder.jpg"
                    }
                    alt={item.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition"
                  />
                  <span
                    className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white ${
                      item.status === "Active" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="p-4">
                  <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-green-600">
                      ${item.price}
                    </span>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="px-4 py-2 text-sm text-white bg-linear-to-r from-green-500 to-emerald-600 rounded-full hover:scale-105 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDetails;
