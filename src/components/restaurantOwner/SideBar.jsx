import React, { useState, useEffect } from "react";
import {
  Home,
  Package,
  Menu,
  Users,
  BarChart,
  Settings,
  Bell,
  X,
  Menu as MenuIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        open &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".menu-btn")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="menu-btn md:hidden fixed top-4 left-4 z-50 bg-white shadow-lg p-2 rounded-lg"
        onClick={() => setOpen(true)}
      >
        <MenuIcon size={24} />
      </button>

      {open && <div className="fixed inset-0 bg-black/40 z-40 md:hidden"></div>}

      <aside
        className={`sidebar fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-xl p-4 flex flex-col gap-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <button
          className="md:hidden absolute top-4 right-4 bg-gray-100 p-2 rounded-lg"
          onClick={() => setOpen(false)}
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold mt-10 md:mt-0">
          <span className="bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 text-white p-2 rounded-lg">
            🍽️
          </span>
          Yumify
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 text-gray-700">
          <Link
            to="/restaurant-owner"
            className="p-3 rounded-xl bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 text-white flex items-center gap-3"
          >
            <Home size={20} />
            Dashboard
          </Link>

          <Link
            to="/restaurant-owner/orders"
            className="p-3 rounded-xl hover:bg-gray-100 flex items-center gap-3"
          >
            <Package size={20} />
            Orders
          </Link>

          <Link
            to="/restaurant-owner/menu"
            className="p-3 rounded-xl hover:bg-gray-100 flex items-center gap-3"
          >
            <Menu size={20} />
            Menu Items
          </Link>

          <Link
            to="/restaurant-owner/inventory"
            className="p-3 rounded-xl hover:bg-gray-100 flex items-center gap-3"
          >
            <Package size={20} />
            Inventory
          </Link>

          <Link
            to="/restaurant-owner/customer"
            className="p-3 rounded-xl hover:bg-gray-100 flex items-center gap-3"
          >
            <Users size={20} />
            Customers
          </Link>

          <Link
            to="/restaurant-owner/analytics"
            className="p-3 rounded-xl hover:bg-gray-100 flex items-center gap-3"
          >
            <BarChart size={20} />
            Analytics
          </Link>

          <div className="mt-auto bg-gray-100 p-4 rounded-xl flex items-center gap-3">
            <div className="bg-purple-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
              JD
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Restaurant Owner</p>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
