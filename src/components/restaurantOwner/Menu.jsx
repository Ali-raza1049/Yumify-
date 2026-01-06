import React, { useState, useEffect } from "react";
import { FiSearch, FiFilter, FiEdit, FiTrash2 } from "react-icons/fi";
import { categories } from "../../data/Data";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getMenuItems,
  deleteMenuItem,
  setSelectedItem,
} from "../../redux/slice/MenuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menuItems = [], loading, error } = useSelector((state) => state.menu);

  const [category, setCategory] = useState("All Categories");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemLocal, setSelectedItemLocal] = useState(null);

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  const filteredItems =
    category === "All Categories"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  const handleEdit = (item) => {
    dispatch(setSelectedItem(item));
    navigate("/restaurant-owner/add-item");
  };

  const handleDelete = (item) => {
    setSelectedItemLocal(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedItemLocal) return;
    await dispatch(deleteMenuItem(selectedItemLocal._id));
    setShowDeleteModal(false);
    setSelectedItemLocal(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Menu Items</h1>
      <p className="text-gray-500 mb-6">Manage Your Restaurant Menu</p>

      {/* Search & Filter */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-3 flex items-center gap-3">
          <FiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full outline-none"
          />
          <div className="relative">
            <FiFilter className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              className="border rounded-lg pl-8 pr-4 py-1.5 text-sm outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <Link to="/restaurant-owner/add-item">
          <button className="ml-4 px-5 py-1.5 rounded-xl text-white font-medium bg-linear-to-r from-purple-600 to-orange-500 shadow-md">
            + Add New Item
          </button>
        </Link>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image ? `http://localhost:5000${item.image}` : "/placeholder.jpg"}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <span
                className={`absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full ${
                  item.status === "Active"
                    ? "bg-green-500"
                    : item.status === "Inactive"
                    ? "bg-gray-500"
                    : "bg-red-500"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="p-3">
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                {item.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <p className="text-sm text-gray-600 mt-1">Price: ${item.price}</p>
              <p className="text-sm text-gray-600 mt-1">Stock: {item.stock}</p>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  <FiEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && selectedItemLocal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p>
              Are you sure you want to delete <strong>{selectedItemLocal.name}</strong>?
            </p>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
