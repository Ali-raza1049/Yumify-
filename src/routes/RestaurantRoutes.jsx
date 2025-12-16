import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewDetailPage from "../pages/user/ViewDetailPage";
const RestaurantRoutes = () => {
  return (
    <Routes>
      <Route path="/view/:id" element={<ViewDetailPage />} />
    </Routes>
  );
};

export default RestaurantRoutes;
