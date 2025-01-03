"use client";

import { Carousel, CarouselItem } from "@/components/ui/carousel"; // Ensure these are implemented
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link component

export default function OrganizationSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6 my-8 space-y-14">
      {/* Schools Carousel */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center font-serif text-emerald-800">
          Schools
        </h2>
        <Carousel className="flex overflow-x-auto scroll-smooth no-scrollbar w-full gap-4">
          {[
            { logo: "/Logos/MISLogo.png", link: "/Shop/MIS" },
            { logo: "/Logos/GISLogo.png", link: "/Shop/GIS" },
            { logo: "/Logos/SDPSLogo.png", link: "/Shop/SDPS" },
          ].map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0"
              style={{
                flex: "0 0 calc(100% / 3 - 16px)", // Dynamically adjusts to fit 3 items per row with spacing
              }}
            >
              <Link href={item.link}>
                <Image
                  src={item.logo}
                  alt={`Logo ${index + 1}`}
                  height={300}
                  width={300}
                  className="object-contain mx-auto hover:opacity-80 hover:scale-105 transition-opacity"
                />
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {/* Organizations Carousel */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center font-serif text-emerald-800">
          Organizations
        </h2>
        <Carousel className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full">
          {[
            { logo: "/Logos/TMLogo.png", link: "/Shop/TM" },
            { logo: "/Logos/MGLogo.png", link: "/Shop/MG" },
          ].map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0"
              style={{
                flex: "0 0 calc(100% / 3 - 16px)", // Adjusts to fit 3 items per row with spacing
              }}
            >
              <Link href={item.link}>
                <Image
                  src={item.logo}
                  alt={`Organization Logo ${index + 1}`}
                  height={300}
                  width={300}
                  className="object-contain mx-auto hover:opacity-80 hover:scale-105 transition-opacity"
                />
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
