import React, { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";
import OrderCard from "../../components/restaurantOwner/OrderCard";
import StatCard from "../../components/restaurantOwner/StatCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantOrders } from "../../redux/slice/OrderSlice";

export function OrderPage() {
  const dispatch = useDispatch();
  const { orders = [], loading = false } = useSelector(
    (state) => state.orders || {}
  );
  const { role } = useSelector((state) => state.auth || {});

  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const statuses = ["All", "Preparing", "In Transit", "Delivered", "Cancelled"];

  // Fetch orders for logged-in Restaurant Owner
  useEffect(() => {
    if (role === "Restaurant Owner") {
      dispatch(fetchRestaurantOrders());
    }
  }, [dispatch, role]);

  if (role !== "Restaurant Owner") {
    return <p className="p-6">You are not a restaurant owner.</p>;
  }

  const filteredOrders = orders
    .filter(
      (o) =>
        o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o._id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((o) => statusFilter === "All" || o.status === statusFilter);

  const preparing = orders.filter((o) => o.status === "Preparing").length;
  const inTransit = orders.filter((o) => o.status === "In Transit").length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;
  const cancelled = orders.filter((o) => o.status === "Cancelled").length;

  if (loading) return <p className="p-6">Loading orders...</p>;

  return (
    <div className="p-6 w-full space-y-6">
      <h1 className="text-3xl font-bold">Orders Management</h1>
      <p className="text-gray-600">Track and manage customer orders</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        <StatCard title="Preparing" value={preparing} icon="🧑‍🍳" />
        <StatCard title="In Transit" value={inTransit} icon="📦" />
        <StatCard title="Delivered" value={delivered} icon="✔️" />
        <StatCard title="Cancelled" value={cancelled} icon="❌" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow">
        <div className="flex items-center w-full sm:w-2/3 bg-gray-100 rounded-xl px-4 py-2 gap-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by order ID, customer name..."
            className="bg-transparent w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
              <OrderCard key={o._id} order={o} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderPage;

