import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../redux/slice/OrderSlice";

export function OrderCard({ order }) {
  const dispatch = useDispatch();
  if (!order) return null; 

  const {
    _id,
    customerName,
    customerEmail,
    items,
    total,
    status: initialStatus,
    createdAt,
  } = order;

  const [status, setStatus] = useState(initialStatus);
  const colors = {
    Delivered: "bg-green-100 text-green-700",
    Preparing: "bg-yellow-100 text-yellow-700",
    "In Transit": "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus); // update local UI immediately
    dispatch(updateOrderStatus({ orderId: _id, status: newStatus }));
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="border-b hover:bg-gray-50"
    >
      <td className="p-4 font-semibold text-blue-600">
        #{_id ? _id.slice(-6) : "------"}
      </td>

      <td className="p-4">
        <div className="font-medium">{customerName || "Unknown"}</div>
        <div className="text-sm text-gray-500">{customerEmail || "N/A"}</div>
      </td>

      <td className="p-4">{items ? items.length : 0} items</td>

      <td className="p-4">${total ? total.toFixed(2) : "0.00"}</td>

      <td className="p-4">
        <select
          className={`px-3 py-1 rounded-full text-sm ${colors[status] || "bg-gray-100 text-gray-700"}`}
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="Preparing">Preparing</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>

      <td className="p-4 text-sm">
        {createdAt ? new Date(createdAt).toLocaleDateString() : "--/--/----"}
      </td>
    </motion.tr>
  );
}

export default OrderCard;
