import React from "react";

const OrderSummary = ({
  subtotal,
  tax,
  total,
  paymentMethod,
  setPaymentMethod,
  handleCheckout,
  loading,
}) => {
  return (
    <div className="w-full lg:w-1/3 p-6 bg-white shadow rounded-xl flex flex-col gap-4 mt-8 pt-6">
      <h2 className="text-2xl font-bold">Order Summary</h2>

      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Tax (10%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-300 pt-2 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Select Payment Method:</h3>
        <div className="flex flex-col gap-2">
          {["easypaisa", "jazzcash", "debit_card"].map((method) => (
            <label
              key={method}
              htmlFor={`payment-${method}`}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id={`payment-${method}`}
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              {method === "debit_card"
                ? "Debit / Credit Card"
                : method.charAt(0).toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={`bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
        }`}
      >
        {loading ? "Placing Order..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default OrderSummary;
