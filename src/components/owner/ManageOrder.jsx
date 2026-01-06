import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { ordersData } from "../../data/Data";
import { useNavigate } from "react-router-dom";

export function ManageOrder() {
  const [statusFilter, setStatusFilter] = useState("All");
  const statuses = ["All", "Preparing", "In Transit", "Delivered", "Cancelled"];

  const navigate = useNavigate(); // ✅ back navigation

  const filteredOrders =
    statusFilter === "All"
      ? ordersData
      : ordersData.filter((o) => o.status === statusFilter);

  return (
    <div className="p-6 w-full space-y-6">
      
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-lg hover:bg-gray-200"
          title="Back to Dashboard"
        >
          ←
        </button>

        <div>
          <h1 className="text-3xl font-bold">Orders Management</h1>
          <p className="text-gray-600">Track and manage customer orders</p>
        </div>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        <StatCard title="Preparing" value={12} icon="🧑‍🍳" />
        <StatCard title="In Transit" value={8} icon="📦" />
        <StatCard title="Delivered Today" value={145} icon="✔️" />
        <StatCard title="Cancelled" value={3} icon="❌" />
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow">
        <div className="flex items-center w-full sm:w-2/3 bg-gray-100 rounded-xl px-4 py-2 gap-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by order ID, customer name..."
            className="bg-transparent w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            className="bg-gray-100 px-3 py-2 rounded-xl outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow rounded-2xl">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Items</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => (
              <motion.tr
                key={o.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 text-blue-600 font-semibold">#{o.id}</td>
                <td className="p-4">
                  <div className="font-medium">{o.customer}</div>
                  <div className="text-sm text-gray-500">{o.email}</div>
                </td>
                <td className="p-4">{o.items} items</td>
                <td className="p-4">${o.total.toFixed(2)}</td>
                <td className="p-4">
                  <StatusBadge status={o.status} />
                </td>
                <td className="p-4">
                  {o.date}
                  <div className="text-sm text-gray-500">{o.time}</div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-2xl shadow p-4 flex flex-col gap-2 bg-white">
        <div className="text-2xl">{icon}</div>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Delivered: "bg-green-100 text-green-700",
    Preparing: "bg-yellow-100 text-yellow-700",
    "In Transit": "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}

export default ManageOrder;
