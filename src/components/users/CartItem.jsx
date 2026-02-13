import React from "react";
import { toast } from "react-hot-toast";

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded-xl">
      <div className="flex items-center gap-4">
        <img
          src={item.image ? `http://localhost:5000${item.image}` : "/placeholder.jpg"}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-xl"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500">${item.price} each</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => onDecrease(item._id)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => onIncrease(item._id)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="font-bold text-green-600">${item.price * item.quantity}</span>
        <button
          onClick={() => {
            onDelete(item._id);
            toast.success("Item removed from cart");
          }}
          className="text-red-500 hover:underline text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
