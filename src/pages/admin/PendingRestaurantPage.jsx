// src/pages/admin/PendingRestaurantsPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPendingRestaurants, activateRestaurant } from "../../redux/slice/RestaurantSlice";
import ManagePendingRestaurant from "../../components/admin/MangaePendingRestaurant";

const PendingRestaurantPage = () => {
  const dispatch = useDispatch();
  const { pendingRestaurants, loading, error } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(getPendingRestaurants());
  }, [dispatch]);

  const handleActivate = async (id) => {
    await dispatch(activateRestaurant(id));
    dispatch(getPendingRestaurants()); 
  };

  if (loading) return <div className="text-center py-10">Loading pending restaurants...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Pending Restaurants</h2>
      <ManagePendingRestaurant
        restaurants={pendingRestaurants}
        onActivate={handleActivate}
      />
    </div>
  );
};

export default PendingRestaurantPage;
