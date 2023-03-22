import React from "react";
import { CartItemType } from "@/lib/cart";
import CartItem from "./CartItem";

interface CartListProps {
  cart: {
    items: CartItemType[];
    total: number;
  };
}

const CartList = ({ cart }: CartListProps) => {
  if (!cart || cart.items.length === 0) {
    return <h2 className="text-xl text-center">Empty</h2>;
  }
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,320px)] justify-center gap-12">
      {cart.items.map((item: CartItemType) => (
        <li key={item.cartItemId} className="w-[320px] mx-auto">
          <CartItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
