import React from "react";
import { Routes, Route } from "react-router-dom";
import OwnerLayout from "../components/restaurantOwner/OwnerLayout";

import OwnerHome from "../components/restaurantOwner/OwnerHome";
import Menupage from "../pages/resturantOwner/MenuPage";
import AddItemPage from "../pages/resturantOwner/AddItemPage";
import InventoryPage from "../pages/resturantOwner/InventoryPage";
import AnalyticsPage from "../pages/resturantOwner/AnalyticsPage";
import Orderpage from "../pages/resturantOwner/OrderPage";
import CustomerManagement from "../pages/resturantOwner/CustomerManagement";

const OwnerRoutes = () => {
  return (
    <Routes>
      <Route element={<OwnerLayout />}>

        
        <Route index element={<OwnerHome />} />

        <Route path="orders" element={<Orderpage />} />
        <Route path="menu" element={<Menupage />} />
        <Route path="add-item" element={<AddItemPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="customer" element={<CustomerManagement />} />

      </Route>
    </Routes>
  );
};

export default OwnerRoutes;
