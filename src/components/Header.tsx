"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import Link from "next/link";
import { IoStorefront, IoHome, IoCartOutline } from "react-icons/io5";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { useCart } from "@/context/CartContext"; // Importing the useCart hook

export default function Header() {
  // Access cart and item count from CartContext
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Get total number of items in the cart

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
                <NavLink href="/Cart">
                  <IoCartOutline size={20} color="green" />
                </NavLink>
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
                <NavLink href="/About">About</NavLink>
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
