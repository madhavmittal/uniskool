// src/components/Product.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext"; // Import the custom hook

interface ProductProps {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  sizes: Array<number>;
}

const Product = ({ title, desc, imgSrc, imgAlt, sizes }: ProductProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // State for selected size
  const { addToCart } = useCart(); // Access addToCart from the CartContext

  const handleAddToCart = () => {
    if (selectedSize) {
      const cartItem = {
        id: Math.floor(Math.random() * 1000), // Generate a random id
        title,
        size: selectedSize,
        imgSrc,
        quantity: 1, // You can adjust this if you want quantity management
        price: 100, // You can adjust this if you want to add price management
      };
      addToCart(cartItem); // Add item to the cart
    } else {
      alert("Please select a size"); // Handle case where no size is selected
    }
  };

  return (
    <div className="p-4">
      <Card className="w-[350px]">
        <CardHeader className="items-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="justify-center">
            <div className="grid w-full gap-4">
              <Image src={imgSrc} alt={imgAlt} height="300" width="300" />
              <div className="flex flex-row space-x-8">
                <label className="text-center pl-4 pt-1">Size</label>
                <Select onValueChange={(value) => setSelectedSize(value)}>
                  <SelectTrigger id="Sizes">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {sizes.map((size) => (
                      <SelectItem
                        key={size}
                        value={String(size)}
                        className="justify-center"
                      >
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;
