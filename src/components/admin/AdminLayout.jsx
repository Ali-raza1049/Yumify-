import React from "react";
import Sidebar from "./SideBar";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-gray-50 flex flex-col">
        <div className="p-6">
          <AdminNavbar />
        </div>
        
        <div className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow-md p-6 h-full">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminLayout;
