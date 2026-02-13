import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../../redux/slice/CustomerSlice";
import { Search, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function ManageUser() {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((state) => state.customers);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.phone && c.phone.includes(searchTerm))
  );

  if (loading) return <p className="p-6">Loading customers...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-8 bg-linear-to-b from-pink-50 to-white">
      <h1 className="text-2xl font-bold">Customer Management</h1>
      <p className="text-gray-600 mb-6">View and manage your customers</p>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-8 flex items-center space-x-3">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search customers by name, email, or phone..."
          className="w-full outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCustomers.map((c) => (
          <div key={c._id} className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br from-purple-400 to-pink-400
                  text-white flex items-center justify-center text-lg font-semibold`}
                >
                  {c.initials}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{c.name}</h2>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1" /> {c.location || "N/A"}
                  </div>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                Active
              </span>
            </div>

            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-500" /> {c.email}
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-500" /> {c.phone || "N/A"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-xs text-purple-600 mb-1">Total Orders</p>
                <p className="text-lg font-semibold">{c.totalOrders}</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-xl">
                <p className="text-xs text-pink-600 mb-1">Total Spent</p>
                <p className="text-lg font-semibold">${c.totalSpent.toFixed(2)}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last order: {c.lastOrder}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <button className="flex-1 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition">
                View Details
              </button>
              <button className="ml-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                <MessageCircle size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUser;
