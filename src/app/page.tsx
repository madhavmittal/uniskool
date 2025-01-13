"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen py-24 h-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.webp"
            alt="Hero Background"
            fill
            className="object-cover opacity-95"
            priority
          />
        </div>

        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold sm:text-5xl text-lime-400 text-shadow-lg shadow-black">
            Find the Perfect Uniform for You
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-2xl text-lime-100 text-shadow-lg shadow-black">
            Explore high-quality uniforms tailored to your requirements.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Button
              variant="default"
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-600 hover:scale-95 text-white"
              onClick={() => (window.location.href = "/Shop")}
            >
              Select Your Organization
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
