"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import Link from "next/link";
import { IoStorefront, IoHome, IoCartOutline, IoCart } from "react-icons/io5";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { useCart } from "@/context/CartContext"; // Importing the useCart hook
import { useState } from "react";

export default function Header() {
  // Access cart and item count from CartContext
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Get total number of items in the cart

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout state
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
    <TooltipProvider>
      <header className="flex items-center justify-between px-6 py-4 bg-yellow-50">
        {/* Logo left-aligned on desktop, centered on mobile */}
        <Link href="/" className="md:pl-8">
          <Image src="/Logos/Logo.png" alt="Logo" height="80" width="150" />
        </Link>

        {/* Desktop Navigation (Hidden on mobile, visible on md screens and larger) */}
        <nav className="hidden md:flex space-x-12 text-xl md:pr-10">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="inline-flex items-center hover:scale-90">
                <NavLink href="/">
                  <IoHome size={20} color="green" />
                </NavLink>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="bg-black text-white p-2 rounded"
            >
              <p>HOME</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="inline-flex items-center hover:scale-90">
                <NavLink href="/Shop">
                  <IoStorefront size={20} color="green" />
                </NavLink>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="bg-black text-white p-2 rounded"
            >
              <p>SHOP</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative inline-flex items-center hover:scale-90">
                <Drawer>
                  <DrawerTrigger>
                    <IoCartOutline size={20} color="green" />
                  </DrawerTrigger>
                  <DrawerContent className="h-screen">
                    <div className="overflow-y-auto max-h-[80vh] px-4">
                      <DrawerHeader>
                        <DrawerTitle className="flex justify-between items-center px-4">
                          {/* Centered Logo */}
                          <div className="flex-1 flex justify-center">
                            <Image
                              src="/Logos/Logo.png"
                              alt="Logo"
                              height={80}
                              width={150}
                            />
                          </div>

                          {/* Close Button (X) at Right */}
                          <DrawerClose>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-600"
                            >
                              ✖
                            </Button>
                          </DrawerClose>
                        </DrawerTitle>

                        <DrawerDescription>
                          <div className="container mx-auto px-6 py-8">
                            <div className="flex items-center space-x-2 mb-8">
                              <IoCart size={30} color="green" />
                              <h1 className="text-3xl font-bold">Your Cart</h1>
                            </div>

                            {cart.length === 0 ? (
                              <div className="text-center">
                                <p>Your cart is empty.</p>
                                <Link href="/Shop" legacyBehavior>
                                  <a className="text-blue-500 hover:underline">
                                    Start shopping
                                  </a>
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
                                          <p className="text-xl font-semibold">
                                            {item.title}
                                          </p>
                                          <p className="text-gray-500">
                                            {item.size}
                                          </p>
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
                              </div>
                            )}
                          </div>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>

                    {/* Fixed Footer */}
                    <DrawerFooter className="border-t p-4">
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
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 right-4 text-red-600 text-[12px] font-bold rounded-full outline w-3.5 h-3.5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="bg-black text-white p-2 rounded"
            >
              <p>CART</p>
            </TooltipContent>
          </Tooltip>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden bg-emerald-400 text-white"
              >
                ☰ {/* Hamburger icon */}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex justify-center">
                <DrawerTitle>
                  <Image
                    src="/Logos/Logo.png"
                    alt="Logo"
                    height="80"
                    width="150"
                  />
                </DrawerTitle>
              </DrawerHeader>
              <DrawerFooter className="flex items-center space-y-6 pb-16">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/Shop">Shop</NavLink>
                <div className="pt-12">
                  <DrawerClose asChild>
                    <Button
                      variant="default"
                      size="default"
                      className="bg-emerald-400 text-white"
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </TooltipProvider>
  );
}
