import React from "react";
import { CartItemType } from "@/lib/cart";
import CartItem from "./CartItem";
import useCart from "@/hooks/useCart";
import LoadingSpinner from "../LoadingSpinner";
import { motion } from "framer-motion";
import { itemVariants, parentVariants } from "@/lib/framerVariants";

const CartList = () => {
  const { cartQuery } = useCart();

  const items = cartQuery.data;

  if (items?.length === 0) {
    return (
      <motion.h2 variants={itemVariants} className="text-xl text-center">
        Your cart is empty
      </motion.h2>
    );
  }

  return cartQuery.isLoading ? (
    <LoadingSpinner />
  ) : (
    <motion.ul
      variants={parentVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-[repeat(auto-fit,320px)] justify-center gap-12"
    >
      {items?.map((item: CartItemType) => (
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          key={item.cartItemId}
          className="w-[320px] mx-auto"
        >
          <CartItem data={item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default CartList;
