import React, { useState } from "react";
import { initialRestaurants } from "../../data/Data";
import { useNavigate } from "react-router-dom";

const StatusBadge = ({ status }) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium";
  const styles =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";


  return <span className={`${base} ${styles}`}>{status}</span>;
};

const RestaurantManagement = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate(); // ✅ back navigation

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cuisine: "",
    status: "Active",
    orders: 0,
    revenue: "$0",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      id: Date.now(),
      ...formData,
    };

    setRestaurants([...restaurants, newRestaurant]);
    setShowModal(false);
    setFormData({
      name: "",
      address: "",
      cuisine: "",
      status: "Active",
      orders: 0,
      revenue: "$0",
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
      
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-lg hover:bg-gray-200"
            title="Back to Dashboard"
          >
            ←
          </button>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Restaurant Management
            </h1>
            <p className="text-sm text-gray-500">
              Manage all your restaurants in one place
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
        >
          + Add Restaurant
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="font-semibold text-gray-900">All Restaurants</h2>
            <p className="text-sm text-gray-500">
              A list of all restaurants in your network
            </p>
          </div>

          <input
            type="text"
            placeholder="Search restaurants..."
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Restaurant</th>
                <th className="text-left px-4 py-3 font-medium">Cuisine</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Total Orders</th>
                <th className="text-left px-4 py-3 font-medium">Revenue</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {restaurants.map((r) => (
                <tr key={r.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        🍽️
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{r.name}</p>
                        <p className="text-xs text-gray-500">{r.address}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-gray-700">{r.cuisine}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="px-4 py-4 text-gray-700">{r.orders}</td>
                  <td className="px-4 py-4 text-gray-700">{r.revenue}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-4">Add Restaurant</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Restaurant Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={(e) =>
                  setFormData({ ...formData, cuisine: e.target.value })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 text-sm"
              >
                <option>Active</option>
                <option>Pending</option>
              </select>

              <input
                type="number"
                placeholder="Total Orders"
                value={formData.orders}
                onChange={(e) =>
                  setFormData({ ...formData, orders: parseInt(e.target.value) })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Revenue"
                value={formData.revenue}
                onChange={(e) =>
                  setFormData({ ...formData, revenue: e.target.value })
                }
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-black text-white rounded-lg"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantManagement;
