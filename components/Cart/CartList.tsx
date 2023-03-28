import React from "react";
import { CartItemType } from "@/lib/cart";
import CartItem from "./CartItem";
import useCart from "@/hooks/useCart";

const CartList = () => {
  const { cartQuery } = useCart();

  const items = cartQuery.data;

  if (items?.length === 0) {
    return <h2 className="text-xl text-center">Empty</h2>;
  }
  if(cartQuery.isLoading) {
    return <p>Loading...</p>
  }
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,320px)] justify-center gap-12">
      {items?.map((item: CartItemType) => (
        <li key={item.cartItemId} className="w-[320px] mx-auto">
          <CartItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
