import React from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "../utils/PrivateRoute";

// USER
import UserLayout from "../components/common/Userlayout";
import Home from "../pages/user/Home";
import RestaurantPage from "../pages/user/RestaurantPage";
import Service from "../pages/user/Service";
import Contact from "../pages/user/Contact";
import TeamPage from "../pages/user/TeamPage";
import AddCart from "../pages/user/AddCart";
import Login from "../pages/user/Login";
import Signup from "../components/users/Signup";
import AboutPage from "../pages/user/AboutPage";
import ViewDetailPage from "../pages/user/ViewDetailPage";
import { ForgetPasswordPage } from "../pages/user/ForgetPasswordPage";

// OWNER
import OwnerLayout from "../components/restaurantOwner/OwnerLayout";
import OwnerHome from "../components/restaurantOwner/OwnerHome";
import MenuPage from "../pages/resturantOwner/MenuPage";
import AddItemPage from "../pages/resturantOwner/AddItemPage";
import RestaurantManagementPage from "../pages/resturantOwner/RestaurantManagementPage";
import OwnerOrderPage from "../pages/resturantOwner/OrderPage";
import CustomerManagement from "../pages/resturantOwner/CustomerManagement";

// ADMIN (UNPROTECTED)
import { DashboardPage } from "../pages/admin/DashboardPage";
import { OrderPage as AdminOrderPage } from "../pages/admin/OrderPage";
import { UserManagementPage } from "../pages/admin/UserManagementPage";
import PendingRestaurantPage  from "../pages/admin/PendingRestaurantPage";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget" element={<ForgetPasswordPage />} />
      </Route>

      {/* ================= CUSTOMER (PROTECTED) ================= */}
      <Route
        path="/customer"
        element={<PrivateRoute allowedRoles={["Customer"]} />}
      >
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="restaurants" element={<RestaurantPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="addcart" element={<AddCart />} />
          <Route path="view/:id" element={<ViewDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Route>

      {/* ================= OWNER (PROTECTED) ================= */}
      <Route element={<PrivateRoute allowedRoles={["Restaurant Owner"]} />}>
        <Route path="/restaurant-owner" element={<OwnerLayout />}>
          <Route index element={<OwnerHome />} />
          <Route path="orders" element={<OwnerOrderPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="add-item" element={<AddItemPage />} />
          <Route
            path="manage-restaurant"
            element={<RestaurantManagementPage />}
          />
          <Route path="customer" element={<CustomerManagement />} />
        </Route>
      </Route>

      {/* ================= ADMIN (PUBLIC) ================= */}
      <Route element={<PrivateRoute allowedRoles={["Admin"]} />}>
        <Route path="/admin">
          <Route index element={<DashboardPage />} />
          <Route path="manage-order" element={<AdminOrderPage />} />
          <Route path="manage-user" element={<UserManagementPage />} />
          <Route path="manage-pending-restaurant" element={<PendingRestaurantPage />} />
        </Route>
      </Route>

    </Routes>
  );
};

export default Index;
