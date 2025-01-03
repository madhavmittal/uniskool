"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [isFloating, setIsFloating] = useState(true);

  const sendWhatsAppMessage = () => {
    const message = `Hi! I visited your jewelry website.`;
    const url = `https://wa.me/919711579688?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");

      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();

        // Check if footer is in view
        const isFooterVisible =
          footerRect.top <= window.innerHeight && footerRect.bottom >= 0;

        // Toggle floating icon based on footer visibility
        setIsFloating(!isFooterVisible);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case user starts mid-scroll
    handleScroll();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Icon */}
      {isFloating && (
        <div
          id="floating-whatsapp"
          className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={sendWhatsAppMessage}
        >
          <Image
            src="/Logos/whatsapp.svg"
            alt="WhatsApp Logo"
            height="24"
            width="24"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="flex justify-between bg-gray-800 text-white py-4 px-6 text-left">
        <div className="flex">
          <p className="text-xs md:text-lg opacity-40 pt-6 ">
            © {new Date().getFullYear()} Uniforms Global. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:pr-8">
          <p className="opacity-70 pb-2">Contact Us</p>
          <Image
            src="/Logos/whatsapp.svg"
            alt="WhatsApp Logo"
            height="32"
            width="32"
            className="cursor-pointer transition duration-200 hover:scale-110"
            onClick={sendWhatsAppMessage}
          />
        </div>
      </footer>
    </>
  );
}
