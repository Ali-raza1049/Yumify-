import React from "react";
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
  );
}
export default App;
