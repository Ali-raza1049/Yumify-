import React from "react";
<<<<<<< HEAD
import Index from "./routes";


function App() {
  return <Index/>;
=======
<<<<<<< HEAD
import UserRoutes from "./routes/UserRoutes";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Home from "./pages/user/Home";
import { PrivateRoute } from "./routes/PrivateRoute";
import UserLayout from "./components/common/Userlayout";
import Signup from "./components/users/Signup";
import OwnerRoutes from "./routes/OwnerRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Owner Routes */}

      <Route
        path="/restaurant-owner/*"
        element={
          <PrivateRoute allowedRoles={["Restaurant Owner"]}>
            <OwnerRoutes />
          </PrivateRoute>
        }
      />
      {/* Customer Routes */}

      <Route
        path="/customer/*"
        element={
          <PrivateRoute allowedRoles={["Customer"]}>
            <>
              <UserRoutes />
            </>
          </PrivateRoute>
        }
      />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
=======
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import RestaurantRoutes from "./routes/RestaurantRoutes";
import { OwnerRoutes } from "./routes/OwnerRoutes";


function App() {
  return (
    <>   
     {/* <AdminRoutes/>*/}
       <UserRoutes/> 
      <RestaurantRoutes/> 
     {/* <OwnerRoutes/> */}
    </>
>>>>>>> 6211ea6cc29eb992cc5d92c96aca9ee33c538407
  );
  
>>>>>>> 2d2d6417f55544d30153ce188491ea35ad44ccfe
}

export default App;
