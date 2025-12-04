// src/routes/UserRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Userlayout from "../components/common/Userlayout";
import Home from "../pages/user/Home";
import Service from "../pages/user/Service";
import Contact from "../pages/user/Contact"
import Signup from "../components/users/Signup"
import AboutPage from "../pages/user/AboutPage"
import SignIn from  "../pages/user/SignIn"
import AddCart from "../pages/user/AddCart"
import TeamPage from "../pages/user/TeamPage"
import MenuPage from "../pages/user/MenuPage"


const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<Userlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/addcart' element={<AddCart/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<Signup />} />
         <Route path='/about' element={<AboutPage/>} />

      </Route>
    </Routes>
  );
};

export default UserRoutes;
