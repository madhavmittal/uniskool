"use client";

import { useCart } from "@/context/CartContext";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      alert("Checkout Successful!");
      setLoading(false);
      clearCart(); // Clear cart after checkout
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <IoCart size={30} color="green" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link href="/Shop" legacyBehavior>
            <a className="text-blue-500 hover:underline">Start shopping</a>
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-cover rounded"
                  />
                  {/* Product Info */}
                  <div>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-gray-500">{item.size}</p>
                    <p className="text-gray-500">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 flex justify-between items-center text-xl font-semibold">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`py-2 px-4 w-full rounded-md text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {loading ? "Processing..." : "Checkout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
