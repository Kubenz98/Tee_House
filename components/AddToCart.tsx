import useCart from "@/hooks/useCart";
import React from "react";
import { useRouter } from "next/router";
import Button from "./Button";

interface AddToCartProps {
  productId: number;
}

const AddToCart = ({ productId }: AddToCartProps) => {
  const { addItem, addItemToCartMutation } = useCart();
  const router = useRouter();

  const addToCartHandler = async () => {
    await addItem(productId);
    router.push("/cart");
  };
  
  if (addItemToCartMutation.isError) throw new Error("Can't add item to cart");

  return (
    <Button className="text-lg py-2 w-full min-[820px]:w-[50%]" onClick={addToCartHandler}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
