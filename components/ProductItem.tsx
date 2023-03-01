import React from "react";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className="flex w-fit max-w-1 p-5 rounded-lg hover:scale-102 hover:shadow-2xl transition-transform bg-slate-50 cursor-pointer">
      <div className="flex flex-col">
        <Image
          priority
          src={product.imageURL}
          width={280}
          height={420}
          alt="productIMG"
        />
        <div className="flex flex-col flex-auto max-w-1/2 py-1 px-4 desktop-xl:hidden">
          <h3 className="mt-2 text-4xl font-medium">{product.title}</h3>
          <p className="my-5">{product.short_description}</p>
          <span className="mt-auto mb-2 text-right text-3xl inline-block">
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
    </li>
  );
};

export default ProductItem;
