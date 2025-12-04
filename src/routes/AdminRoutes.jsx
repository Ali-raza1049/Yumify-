import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import AdminHome from "../components/admin/AdminHome";
import AdminLayout from "../components/Admin/Adminlayout";
import MenuPage from "../pages/admin/MenuPage";
import OrderPage from "../pages/admin/OrderPage"
import AddItemPage from "../pages/admin/AddItemPage"
import InventoryPage from "../pages/admin/InventoryPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path="/" element={<AdminHome />} />
        <Route path="/orders" element={<OrderPage/>} />
        <Route path="/menu" element={<MenuPage />} />
         <Route path="/add-item" element={<AddItemPage/>} />
         <Route path="/inventory" element={<InventoryPage/>} />
  
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
