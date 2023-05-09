import React from "react";
import Image from "next/image";
import { Product } from "../lib/products";
import Link from "next/link";
import AddToCartFromList from "@/modules/Cart/components/AddToCartFromList";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { user, userIsLoading } = useUser();
  const { id, imageURL, title, price } = product;
  const router = useRouter();
  return (
    <li>
      <Link
        scroll={router.pathname.startsWith("/products")}
        href={`/products/${id}`}
        className="flex justify-center p-5 h-full max-w-1 rounded-lg border border-slate-100 dark:border-neutral-800 hover:scale-102 hover:border-black dark:hover:border-neutral-500 transition-all cursor-pointer"
      >
        <div className="flex flex-col items-center max-w-[400px]">
          <Image
            priority
            src={imageURL}
            width={280}
            height={420}
            alt="productIMG"
            className="rounded dark:brightness-90"
          />
          <div className="flex w-full">
            <div className="flex flex-col flex-auto">
              <h3 className="mt-2 text-xl font-medium">{title}</h3>
              <span className=" text-md inline-block">{price}</span>
            </div>
            {user && !userIsLoading && <AddToCartFromList productId={id} />}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
