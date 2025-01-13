"use client";

import { useState, useRef, useEffect } from "react";
import Product from "@/components/Product";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductType {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  sizes: number[];
}

const Carousel = () => {
  const products: ProductType[] = [
    {
      title: "SCROLL RIGHT",
      desc: "Explore all Products",
      imgSrc: "/Products/MIS/ArrowRight.jpg",
      imgAlt: "Arrow",
      sizes: [0],
    },
    {
      title: "SHIRT",
      desc: "Full Sleeves School Shirt",
      imgSrc: "/Products/MIS/Shirt.jpeg",
      imgAlt: "Shirt",
      sizes: [26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
    },
    {
      title: "PANTS",
      desc: "Full Length School Pants",
      imgSrc: "/Products/MIS/Pant.jpeg",
      imgAlt: "Pants",
      sizes: [28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "SWEATER",
      desc: "Sleeveless School Sweater",
      imgSrc: "/Products/MIS/Sweater.jpeg",
      imgAlt: "Sweater",
      sizes: [28, 30, 32, 34, 36, 38, 40, 42, 44],
    },
    {
      title: "COAT",
      desc: "Winter School Coat",
      imgSrc: "/Products/MIS/Coat.jpeg",
      imgAlt: "Coat",
      sizes: [30, 32, 34, 36, 38, 40, 42, 44, 46],
    },
    {
      title: "T-SHIRT",
      desc: "Half Sleeves Red T-Shirt",
      imgSrc: "/Products/MIS/TshirtR.jpeg",
      imgAlt: "T-Shirt",
      sizes: [26, 28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "T-SHIRT",
      desc: "Half Sleeves Blue T-Shirt",
      imgSrc: "/Products/MIS/TshirtB.jpeg",
      imgAlt: "T-Shirt",
      sizes: [26, 28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "T-SHIRT",
      desc: "Half Sleeves Yellow T-Shirt",
      imgSrc: "/Products/MIS/TshirtY.jpeg",
      imgAlt: "T-Shirt",
      sizes: [26, 28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "T-SHIRT",
      desc: "Half Sleeves Green T-Shirt",
      imgSrc: "/Products/MIS/TshirtG.jpeg",
      imgAlt: "T-Shirt",
      sizes: [26, 28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "SOCKS",
      desc: "Regular Socks",
      imgSrc: "/Products/MIS/Socks.jpeg",
      imgAlt: "Socks",
      sizes: [2, 3, 4, 5, 6, 7],
    },
    {
      title: "SOCKS",
      desc: "Sports Socks",
      imgSrc: "/Products/MIS/SocksSport.jpeg",
      imgAlt: "Sports Socks",
      sizes: [2, 3, 4, 5, 6, 7],
    },
    {
      title: "TRACK PANTS",
      desc: "Full Length Track Pants",
      imgSrc: "/Products/MIS/TrackP.jpeg",
      imgAlt: "Track Pants",
      sizes: [28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "TRACK JACKET",
      desc: "Full Length Track Jacket",
      imgSrc: "/Products/MIS/TrackJ.jpeg",
      imgAlt: "Track Pants",
      sizes: [28, 30, 32, 34, 36, 38, 40, 42],
    },
    {
      title: "TIE",
      desc: "School Tie",
      imgSrc: "/Products/MIS/TieL.jpeg",
      imgAlt: "Tie",
      sizes: [1],
    },
    {
      title: "BELT",
      desc: "School Belt",
      imgSrc: "/Products/MIS/Belt.jpeg",
      imgAlt: "Belt",
      sizes: [1, 2],
    },
    {
      title: "STRAP-ON TIE",
      desc: "Tie for Children",
      imgSrc: "/Products/MIS/TieS.jpeg",
      imgAlt: "Tie",
      sizes: [1, 2, 3],
    },
    {
      title: "SCROLL LEFT",
      desc: "End of the line",
      imgSrc: "/Products/MIS/ArrowLeft.jpg",
      imgAlt: "Arrow",
      sizes: [0],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const centerX = carousel.offsetWidth / 2;
    const children = Array.from(carousel.children) as HTMLElement[];
    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenterX = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenterX - centerX);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Breadcrumb */}
      <Breadcrumb className="ml-14 mt-6 mb-2 z-50">
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Grade
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/Shop/MIS/Kindergarten">Kindergarten</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>1 to 5</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/MIS/Secondary">6 to 12</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Category
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Uniform</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Shop/MIS/Primary/Shoes">Shoes</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Uniforms</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Carousel Section */}
      <div className="flex-1 relative flex items-center justify-center bg-gray-100">
        {/* Blur Effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>

        {/* Carousel Items */}
        <div
          ref={carouselRef}
          className="flex items-center space-x-8 overflow-x-scroll scrollbar-none px-8"
        >
          {products.map((product, index) => {
            const isActive = index === activeIndex;
            const scale = isActive ? "scale-100" : "scale-50";
            const zIndex = isActive ? "z-10" : "z-0";
            const opacity = isActive ? "opacity-100" : "opacity-50";

            return (
              <div
                key={index}
                className={`transition-all duration-500 transform ${scale} ${zIndex} ${opacity}`}
                style={{ minWidth: "300px" }}
              >
                <Product {...product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
