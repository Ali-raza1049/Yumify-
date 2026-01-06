import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  updateQuantity,
  removeFromCart,
} from "../../redux/slice/CartSlice";

export function AddCart() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    dispatch(getCart()).finally(() => setLocalLoading(false));
  }, [dispatch]);

  const handleIncrease = (item) => {
    if (!item.productId?._id) return;
    dispatch(
      updateQuantity({
        productId: item.productId._id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (!item.productId?._id || item.quantity <= 1) return;
    dispatch(
      updateQuantity({
        productId: item.productId._id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (item) => {
    if (!item.productId?._id) return;
    dispatch(removeFromCart(item.productId._id));
  };

  const total = items.reduce(
    (acc, item) => acc + item.quantity * (item.productId?.price || 0),
    0
  );

  if (localLoading || loading)
    return <p className="p-10 text-center text-xl">Loading cart...</p>;

  if (error)
    return <p className="p-10 text-center text-red-500">Error: {error}</p>;

  if (!items.length)
    return <p className="p-10 text-center text-xl">Your cart is empty</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-10">
      
      {/* 🛒 Cart Items */}
      <div className="md:col-span-2 space-y-4">
        {items.map((item, index) => (
          <div
            key={item.productId?._id || index}
            className="flex gap-4 bg-white p-4 rounded-xl shadow"
          >
            {/* Image */}
            <img
              src={`http://localhost:5000${item.productId?.image}`}
              alt={item.productId?.name}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.productId?.name}
              </h3>
              <p className="text-gray-500 text-sm">
                ${item.productId?.price}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => handleDecrease(item)}
                  className="w-8 h-8 bg-gray-200 rounded-full"
                >
                  −
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item)}
                  className="w-8 h-8 bg-gray-200 rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => handleRemove(item)}
              className="text-red-500 text-sm self-start"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* 💳 Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4 h-fit">
        <h3 className="text-xl font-bold">Order Summary</h3>

        <div className="flex justify-between text-gray-600">
          <span>Items</span>
          <span>{items.length}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default AddCart;
