import ProductsChoice from "@/components/ProductsChoice";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductsChoice
        hrefUni="/Shop/MIS/Primary/Uniforms"
        hrefShoe="/Shop/MIS/Primary/Shoes"
      />
    </div>
  );
};

export default page;
