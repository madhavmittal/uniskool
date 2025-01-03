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
import React from "react";

interface ProductProps {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  sizes: Array<number>;
}

const Product = ({ title, desc, imgSrc, imgAlt, sizes }: ProductProps) => {
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
                <Select>
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
          <Button>Add</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;
