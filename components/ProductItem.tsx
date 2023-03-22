import React from "react";
import Image from "next/image";
import { Product } from "@/lib/products";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li>
      <Link href={`/products/${product.id}`} className="flex justify-center p-5 h-full max-w-1 rounded-lg border border-slate-100 hover:scale-102 hover:border hover:border-black transition-all cursor-pointer">
        <div className="flex flex-col items-center max-w-[400px]">
          <Image
            priority
            src={product.imageURL}
            width={280}
            height={420}
            alt="productIMG"
            className="rounded"
          />
          <div className="flex flex-col flex-auto w-full">
            <h3 className="mt-2 text-xl font-medium">{product.title}</h3>
            <span className=" text-md inline-block">
              {product.price}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
