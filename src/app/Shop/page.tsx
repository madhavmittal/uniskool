"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";

export default function OrganizationSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6 mb-6 space-y-14">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/Shop">Organizations</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Schools Carousel */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center font-serif text-emerald-800">
          Schools
        </h2>
        <Carousel className="flex overflow-x-auto scroll-smooth no-scrollbar w-full gap-4">
          {[
            { logo: "/Logos/MISLogo.png", link: "/Shop/MIS", name: "MIS" },
            { logo: "/Logos/GISLogo.png", link: "/Shop/GIS", name: "GIS" },
            { logo: "/Logos/SDPSLogo.png", link: "/Shop/SDPS", name: "SDPS" },
          ].map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 relative"
              style={{
                flex: "0 0 calc(100% / 3 - 16px)", // Adjusts to fit 3 items per row with spacing
              }}
            >
              <div className="relative">
                <Link href={item.name === "MIS" ? item.link : "#"}>
                  <Image
                    src={item.logo}
                    alt={`Logo ${index + 1}`}
                    height={300}
                    width={300}
                    className="object-contain mx-auto hover:opacity-80 hover:scale-105 transition-opacity"
                  />
                </Link>

                {/* Apply blur & overlay to non-MIS items */}
                {item.name !== "MIS" && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl">
                    Coming Soon
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {/* Industries Carousel */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center font-serif text-emerald-800">
          Industries
        </h2>
        <Carousel className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full">
          {[
            { logo: "/Logos/TMLogo.png", link: "/Shop/TM", name: "TM" },
            { logo: "/Logos/MGLogo.png", link: "/Shop/MG", name: "MG" },
          ].map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 relative"
              style={{
                flex: "0 0 calc(100% / 3 - 16px)", // Adjusts to fit 3 items per row with spacing
              }}
            >
              <div className="relative">
                <Link href={"#"}>
                  <Image
                    src={item.logo}
                    alt={`Organization Logo ${index + 1}`}
                    height={300}
                    width={300}
                    className="object-contain mx-auto hover:opacity-80 hover:scale-105 transition-opacity"
                  />
                </Link>

                {/* Apply blur & overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl">
                  Coming Soon
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
