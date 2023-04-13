import useCart from "@/hooks/useCart";
import React from "react";
import { useRouter } from "next/router";
import Button from "./Buttons/Button";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/framerVariants";

interface AddToCartProps {
  productId: number;
}

const AddToCart = ({ productId }: AddToCartProps) => {
  const { addItem, addItemToCartMutation, cartRefetch, cartQuery } = useCart();
  const router = useRouter();

  const addToCartHandler = async () => {
    await addItem(productId);
    await cartRefetch();
    router.push("/cart");
  };

  if (addItemToCartMutation.isError) throw new Error("Can't add item to cart");

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Button
        className="text-lg py-2 w-full min-[820px]:w-[50%]"
        onClick={addToCartHandler}
        disabled={addItemToCartMutation.isLoading || cartQuery.isFetching}
      >
        Add To Cart
      </Button>
    </motion.div>
  );
};

export default AddToCart;
