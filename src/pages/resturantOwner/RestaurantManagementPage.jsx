import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantHeader from "../../components/restaurantOwner/RestaurantHeader";
import RestaurantTable from "../../components/restaurantOwner/RestaurantTable";
import AddRestaurantModal from "../../components/restaurantOwner/AddRestaurantModal";
import {
  getOwnerRestaurants,
  addOwnerRestaurant,
  deleteOwnerRestaurant,
} from "../../redux/slice/RestaurantSlice";

const RestaurantManagementPage = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurant
  );

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cuisine: "",
    orders: 0,
    revenue: 0,
    status: "Pending", 
    image: null,
  });

  // Fetch owner's restaurants on mount
  useEffect(() => {
    if (token) {
      dispatch(getOwnerRestaurants());
    }
  }, [dispatch, token]);

  // Delete restaurant
  const handleDelete = async (id) => {
    await dispatch(deleteOwnerRestaurant(id));
    dispatch(getOwnerRestaurants()); 
  };

  // Add restaurant
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(addOwnerRestaurant(formData));

      if (result.meta.requestStatus === "fulfilled") {
        dispatch(getOwnerRestaurants());
        setFormData({
          name: "",
          address: "",
          cuisine: "",
          orders: 0,
          revenue: 0,
          status: "Pending",
          image: null,
        });
        setShowModal(false);
      } else {
        console.error("Failed to add restaurant:", result.payload);
      }
    } catch (err) {
      console.error("Error adding restaurant:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <RestaurantHeader onAdd={() => setShowModal(true)} />

      {loading ? (
        <div className="text-center text-xl py-10">Loading restaurants...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <RestaurantTable
          restaurants={Array.isArray(restaurants) ? restaurants : []}
          onDelete={handleDelete}
        />
      )}

      {showModal && (
        <AddRestaurantModal
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default RestaurantManagementPage;
