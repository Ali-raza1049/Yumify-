import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/users/CartItem";
import OrderSummary from "../../components/users/OrderSummary";
import { createOrder } from "../../redux/slice/OrderSlice";

const AddCart = () => {
  const dispatch = useDispatch();
 const loading = useSelector((state) => state.orders?.loading) || false;


  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("easypaisa");

  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleIncrease = (id) =>
    updateCart(
      cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const handleDecrease = (id) =>
    updateCart(
      cart.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );

  const handleDelete = (id) =>
    updateCart(cart.filter((item) => item._id !== id));

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    if (!cart.length) return toast.error("Cart is empty");

    const restaurantId = cart[0]?.restaurantId;
    if (!restaurantId) {
      console.error("Cart missing restaurantId:", cart);
      return toast.error("Invalid cart data. Please re-add items.");
    }

    const orderData = {
      restaurantId,
      items: cart.map((item) => ({
        itemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      paymentMethod,
    };

    console.log("Creating order:", orderData);

    try {
      await dispatch(createOrder(orderData)).unwrap();
      toast.success("Order placed successfully!");

      localStorage.removeItem("cart");
      setCart([]);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Order failed:", err);
      toast.error(err || "Order failed");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {cart.length > 0 && (
        <OrderSummary
          subtotal={subtotal}
          tax={tax}
          total={total}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          handleCheckout={handleCheckout}
          loading={loading}
        />
      )}
    </div>
  );
};

export default AddCart;
