"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StandardSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto my-6 space-y-14">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Organizations
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Modern International</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/GIS">Ganga International</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/SDPS">SD Public</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mt-2">
                  <Link href="/Shop/TM">Tata Motors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/MG">MG Motors</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Modern International School</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Standards Carousel */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center font-serif text-emerald-800">
          Select Your Grade
        </h2>
        <Carousel className="flex overflow-x-auto scroll-smooth no-scrollbar w-full gap-4">
          {[
            {
              logo: "/Logos/KGLogo.png",
              link: "/Shop/MIS/Kindergarten",
              desc: "LKG/UKG",
            },
            {
              logo: "/Logos/PrimaryLogo.png",
              link: "/Shop/MIS/Primary",
              desc: "1 to 5",
            },
            {
              logo: "/Logos/SecondaryLogo.png",
              link: "/Shop/MIS/Secondary",
              desc: "6 to 12",
            },
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
                  height={200}
                  width={250}
                  className="object-contain mx-auto hover:opacity-80 hover:scale-110 transition-opacity"
                />
                <div className="flex justify-center text-2xl text-emerald-800">
                  {item.desc}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
