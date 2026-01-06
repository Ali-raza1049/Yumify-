import React from "react";

const AddRestaurantModal = ({ formData, setFormData, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h3 className="text-lg font-semibold mb-4">Add Restaurant</h3>

        <form onSubmit={onSubmit} className="space-y-3">
          {/* Name */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          {/* Address */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />

          {/* Cuisine */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Cuisine"
            value={formData.cuisine}
            onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
            required
          />

          {/* Status */}
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* Orders */}
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            placeholder="Total Orders"
            value={formData.orders}
            min="0"
            onChange={(e) => setFormData({ ...formData, orders: parseInt(e.target.value) || 0 })}
          />

          {/* Revenue */}
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Revenue (e.g. $5000)"
            value={formData.revenue}
            onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
          />

          {/* Image */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData,  image: e.target.files[0] })}
          />

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="border px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded">
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
