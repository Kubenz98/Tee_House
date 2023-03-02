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
      <Link href={`/products/${product.id}`} className="flex justify-center p-5 h-full max-w-1 rounded-lg hover:scale-102 hover:shadow-2xl transition-transform bg-slate-50 cursor-pointer">
        <div className="flex flex-col items-center max-w-[400px]">
          <Image
            priority
            src={product.imageURL}
            width={280}
            height={420}
            alt="productIMG"
          />
          <div className="flex flex-col flex-auto py-1 px-4 desktop-xl:hidden">
            <h3 className="mt-2 text-4xl font-medium">{product.title}</h3>
            <p className="my-5">{product.short_description}</p>
            <span className="mt-auto text-right text-3xl inline-block">
              {product.price}
            </span>
          </div>
        </div>
        <div className="hidden desktop-xl:flex flex-col max-w-1/2 px-4">
          <h3 className="text-4xl font-medium">{product.title}</h3>
          <p className="mt-5">{product.short_description}</p>
          <span className="mt-auto mb-2 text-right text-3xl inline-block">
            {product.price}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
