import { useState, useEffect } from "react";

function AddItemPage() {
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
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

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
     if (!form.cost) newErrors.cost = "cost quantity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      console.log("Form has errors");
      return;
    }

    console.log("Form Submitted", form);
    alert("Item Created Successfully!");
  };

  
  useEffect(() => {
    if (!form.image) {
      setImagePreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(form.image);
    setImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [form.image]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold">Add New Menu Item</h1>
      <p className="text-gray-500 mb-6">Create a new item for your menu</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

            
            <div>
              <label className="font-medium">Product Name *</label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Margherita Pizza"
                className={`w-full p-3 border rounded-lg mt-1 to-blue-700  ${
                  errors.name ? "text-red-500" : ""
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

            {/* Description */}
            <div className="mt-4">
              <label className="font-medium">Description</label>
              <textarea
                name="description"
                placeholder="Describe your menu item..."
                className="w-full p-3 border rounded-lg mt-1"
                rows="4"
                value={form.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Pricing & Inventory */}
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
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Cost Price ($)</label>
                <input
                  type="number"
                  name="cost"
                  className="w-full p-3 border rounded-lg mt-1"
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
                {errors.stock && (
                  <p className="text-red-500 text-sm">{errors.stock}</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Additional Details</h2>
            <div>
              <label className="font-medium">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                placeholder="e.g., Tomato, Cheese, Basil"
                className="w-full p-3 border rounded-lg mt-1"
                value={form.ingredients}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label className="font-medium">Allergens</label>
              <input
                type="text"
                name="allergens"
                placeholder="e.g., Dairy, Gluten"
                className="w-full p-3 border rounded-lg mt-1"
                value={form.allergens}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Product Image */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Product Image</h2>
            <label className="border-2 border-dashed p-10 rounded-xl block text-center cursor-pointer text-gray-500">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setForm({ ...form, image: file });
                  }
                }}
              />
              Click to upload image
              <p className="text-xs mt-1">PNG, JPG up to 5MB</p>
            </label>

            {imagePreview && (
              <div className="mt-4">
                <p className="font-medium mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <button
              className="w-full p-3 rounded-lg text-white font-semibold bg-linear-to-r from-purple-500 to-orange-500"
              onClick={handleSubmit}
            >
              Create Menu Item
            </button>
            <button className="w-full p-3 rounded-lg border">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
