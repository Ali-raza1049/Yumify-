import React from "react";
import { Routes, Route } from "react-router-dom";
import Userlayout from "../components/common/Userlayout";

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

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<Userlayout />}>
        
        
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="restaurants" element={<RestaurantPage />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="addcart" element={<AddCart />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="view/:id" element={<ViewDetailPage />} />

      </Route>
    </Routes>
  );
};

export default UserRoutes;
