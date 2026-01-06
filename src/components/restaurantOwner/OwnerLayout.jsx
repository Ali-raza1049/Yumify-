import React from "react";
import Sidebar from "./SideBar";
import OwnerNavbar from "./OwnerNavbar"
import { Outlet } from "react-router-dom";

export function OwnerLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-gray-50 flex flex-col">
        <div className="p-6">
          <OwnerNavbar/>
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
export default OwnerLayout;
