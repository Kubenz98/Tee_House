import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CartItemType } from "@/types/cart";
import useCart from "@/hooks/useCart";
import QuantityHandler from "./QuantityHandler";

interface CartItemProps {
  data: CartItemType;
}

const CartItem = ({ data }: CartItemProps) => {
  const { product } = data;
  const productId = data.cartItemId;
  const {
    addItemQuantity,
    addItemQuantityMutation,
    removeItemQuantity,
    removeItemQuantityMutation,
  } = useCart();

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
          <QuantityHandler
            productId={productId}
            action="addOne"
            quantityHandler={addItemQuantity}
            quantityHandlerMutation={addItemQuantityMutation}
          />
          <QuantityHandler
            productId={productId}
            action="subtractOne"
            quantityHandler={removeItemQuantity}
            quantityHandlerMutation={removeItemQuantityMutation}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);