import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/admin/DashboardPage";
import { RestaurantPage } from "../pages/admin/RestaurantPage";
import { OrderPage } from "../pages/admin/OrderPage";
import { UserManagementPage } from "../pages/admin/UserManagementPage";

const AdminRoutes = () => {
  return (
    <Routes>
    
      <Route index element={<DashboardPage />} />
      <Route path="manage-restaurant" element={<RestaurantPage />}/>
      <Route path="manage-order" element={<OrderPage />} />
      <Route path="manage-user" element={<UserManagementPage />} />
    </Routes>
  );
};

export default AdminRoutes;
