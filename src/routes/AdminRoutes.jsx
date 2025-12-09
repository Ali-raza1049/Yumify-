import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import AdminHome from "../components/admin/AdminHome";
import AdminLayout from "../components/Admin/Adminlayout";
import MenuPage from "../pages/admin/MenuPage";
import OrderPage from "../pages/admin/OrderPage"
import AddItemPage from "../pages/admin/AddItemPage"
import InventoryPage from "../pages/admin/InventoryPage";
import AnalyticsPage from "../pages/admin/AnalyticsPage";
import CustomerManagement from "../pages/admin/CustomerManagement";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path="/" element={<AdminHome />} />
        <Route path="/orders" element={<OrderPage/>} />
        <Route path="/menu" element={<MenuPage />} />
         <Route path="/add-item" element={<AddItemPage/>} />
         <Route path="/inventory" element={<InventoryPage/>} />
          <Route path="/analytics" element={<AnalyticsPage/>} />
          <Route path="/customer" element={<CustomerManagement/>} />
  
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
