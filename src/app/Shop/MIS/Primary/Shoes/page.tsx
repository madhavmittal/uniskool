"use client";

import { useState, useRef, useEffect } from "react";
import Product from "@/components/Product";

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
      title: "SHOES",
      desc: "School Uniform Shoe",
      imgSrc: "/Products/MIS/ShoeUni.jpeg",
      imgAlt: "shoes",
      sizes: [8, 9, 10, 11],
    },
    {
      title: "SPORTS SHOES",
      desc: "Sports Red",
      imgSrc: "/Products/MIS/ShoeR.jpeg",
      imgAlt: "shoes",
      sizes: [8, 9, 10, 11],
    },
    {
      title: "SPORTS SHOES",
      desc: "Sports Blue",
      imgSrc: "/Products/MIS/ShoeB.jpeg",
      imgAlt: "shoes",
      sizes: [8, 9, 10, 11],
    },
    {
      title: "SPORT SHOES",
      desc: "Sports Yellow",
      imgSrc: "/Products/MIS/ShoeY.jpeg",
      imgAlt: "shoes",
      sizes: [8, 9, 10, 11],
    },
    {
      title: "SPORT SHOES",
      desc: "Sports Green",
      imgSrc: "/Products/MIS/ShoeG.jpeg",
      imgAlt: "shoes",
      sizes: [8, 9, 10, 11],
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
