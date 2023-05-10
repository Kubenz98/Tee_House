import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CartItemType } from "@/types/cart";
import useCart from "@/hooks/useCart";
import QuantityHandler from "./QuantityHandler";
import { quantityHandlers } from "../lib/quantityHandlers";

interface CartItemProps {
  data: CartItemType;
}

const CartItem = ({ data }: CartItemProps) => {
  const { product } = data;
  const productId = data.cartItemId;
  const { quantityHandler, quantityHandlerMutation } = useCart();

  return (
    <div className="flex gap-3">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          width={150}
          height={150}
          alt="This is a product image"
          className="dark:brightness-90"
        />
      </Link>
      <div className="flex flex-col">
        <h4 className="max-w-[120px] font-semibold leading-1">
          {product.name}
        </h4>
        <span>{product.price}</span>
        <span>Quantity: {product.quantity}</span>
        <div className="py-1 flex gap-1 mt-auto mb-2">
          {quantityHandlers.map((handler: string, index) => (
            <QuantityHandler
              key={index}
              productId={productId}
              action={handler}
              quantityHandler={quantityHandler}
              quantityHandlerMutation={quantityHandlerMutation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
