import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantHeader from "../../components/admin/RestaurantHeader";
import RestaurantTable from "../../components/admin/RestaurantTable";
import AddRestaurantModal from "../../components/admin/AddRestaurantModal";
import {
  getRestaurants,
  addRestaurant,
  deleteRestaurant,
} from "../../redux/slice/RestaurantSlice";

const RestaurantManagementPage = () => {
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector((state) => state.restaurant);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cuisine: "",
    orders: 0,
    revenue: 0,
    status: "Active",
    image: null,
  });

  // Fetch restaurants on mount
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRestaurant(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRestaurant(formData));
    setShowModal(false);
    setFormData({
      name: "",
      address: "",
      cuisine: "",
      orders: 0,
      revenue: 0,
      status: "Active",
      image: null,
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <RestaurantHeader onAdd={() => setShowModal(true)} />

      <RestaurantTable restaurants={restaurants} onDelete={handleDelete} />

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
