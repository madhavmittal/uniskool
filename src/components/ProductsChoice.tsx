import Link from "next/link";
import Image from "next/image";

interface ProductsChoiceProps {
  hrefUni: string;
  hrefShoe: string;
}

const ProductsChoice = ({ hrefUni, hrefShoe }: ProductsChoiceProps) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center text-center text-3xl text-emerald-800 md:space-x-36 py-10">
      {/* Image 1 */}
      <Link href={hrefUni}>
        <Image
          src="/Logos/UniformCat.jpg" // Replace with your image path
          alt="Uniforms"
          width="300"
          height="300"
          className=" h-auto object-cover cursor-pointer hover:opacity-80 hover:scale-110 transition-opacity"
        />
        Uniforms
      </Link>

      {/* Image 2 */}
      <Link href={hrefShoe}>
        <Image
          src="/Logos/ShoesCat.jpeg" // Replace with your image path
          alt="Shoes"
          width="300"
          height="300"
          className=" h-auto object-cover cursor-pointer hover:opacity-80 hover:scale-110 transition-opacity"
        />
        Shoes
      </Link>
    </div>
  );
};

export default ProductsChoice;
