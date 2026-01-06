// pages/restaurant-owner/AddItemPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMenuItem,
  updateMenuItem,
  setSelectedItem,
  clearSelectedItem,
  clearError,
} from "../../redux/slice/MenuSlice";

function AddItemPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editingItem = location.state?.item;

  const { selectedItem, loadingAdd, loadingUpdate, error } = useSelector(
    (state) => state.menu
  );

  const [form, setForm] = useState({
    name: "",
    category: "",
    status: "Active",
    description: "",
    price: "",
    cost: "",
    stock: "",
    ingredients: "",
    allergens: "",
    menuImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingItem) {
      dispatch(setSelectedItem(editingItem));
      setForm({
        name: editingItem.name || "",
        category: editingItem.category || "",
        status: editingItem.status || "Active",
        description: editingItem.description || "",
        price: editingItem.price || "",
        cost: editingItem.cost || "",
        stock: editingItem.stock || "",
        ingredients: editingItem.ingredients || "",
        allergens: editingItem.allergens || "",
        menuImage: null,
      });
      if (editingItem.menuImage) {
        setImagePreview(`http://localhost:5000${editingItem.menuImage}`);
      }
    } else {
      dispatch(clearSelectedItem());
    }
  }, [editingItem, dispatch]);
  useEffect(() => {
    if (!form.menuImage) return;
    const objectUrl = URL.createObjectURL(form.menuImage);
    setImagePreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [form.menuImage]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Product name is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.stock) newErrors.stock = "Stock quantity is required";
    if (!form.cost) newErrors.cost = "Cost is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const data = { ...form }; // pass to slice
    if (editingItem) {
      dispatch(updateMenuItem({ id: editingItem._id, formData: data }))
        .unwrap()
        .then(() => {
          alert("Menu item updated successfully!");
          navigate("/restaurant-owner/menu");
        })
        .catch((err) => alert(err));
    } else {
      dispatch(addMenuItem(data))
        .unwrap()
        .then(() => {
          alert("Menu item created successfully!");
          navigate("/restaurant-owner/menu");
        })
        .catch((err) => alert(err));
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold">
        {editingItem ? "Edit Menu Item" : "Add New Menu Item"}
      </h1>
      <p className="text-gray-500 mb-6">
        {editingItem
          ? "Update your menu item details"
          : "Create a new item for your menu"}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <div>
              <label className="font-medium">Product Name *</label>
              <input
                type="text"
                name="name"
                className={`w-full p-3 border rounded-lg mt-1 ${
                  errors.name ? "border-red-500" : ""
                }`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="font-medium">Category *</label>
                <select
                  name="category"
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    errors.category ? "border-red-500" : ""
                  }`}
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option>Pizza</option>
                  <option>Burgers</option>
                  <option>Fries</option>
                  <option>Salads</option>
                  <option>Desserts</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">{errors.category}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Status *</label>
                <select
                  name="status"
                  className="w-full p-3 border rounded-lg mt-1"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Stock out</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium">Description</label>
              <textarea
                name="description"
                className="w-full p-3 border rounded-lg mt-1"
                rows="4"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Pricing & Inventory</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="font-medium">Selling Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    errors.price ? "border-red-500" : ""
                  }`}
                  value={form.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-medium">Cost Price ($) *</label>
                <input
                  type="number"
                  name="cost"
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    errors.cost ? "border-red-500" : ""
                  }`}
                  value={form.cost}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-medium">Stock Quantity *</label>
                <input
                  type="number"
                  name="stock"
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    errors.stock ? "border-red-500" : ""
                  }`}
                  value={form.stock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Additional Details</h2>
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              className="w-full p-3 border rounded-lg mt-1 mb-2"
              value={form.ingredients}
              onChange={handleChange}
            />
            <input
              type="text"
              name="allergens"
              placeholder="Allergens"
              className="w-full p-3 border rounded-lg mt-1"
              value={form.allergens}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Product Image</h2>
            <label className="border-2 border-dashed p-10 rounded-xl block text-center cursor-pointer text-gray-500">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setForm({ ...form, menuImage: file });
                }}
              />
              Click to upload image
            </label>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <button
              className="w-full p-3 rounded-lg text-white font-semibold bg-purple-500 hover:bg-purple-600"
              onClick={handleSubmit}
              disabled={loadingAdd || loadingUpdate}
            >
              {editingItem
                ? loadingUpdate
                  ? "Updating..."
                  : "Update Menu Item"
                : loadingAdd
                ? "Creating..."
                : "Create Menu Item"}
            </button>
            <button
              className="w-full p-3 rounded-lg border"
              onClick={() => navigate("/restaurant-owner/menu")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
