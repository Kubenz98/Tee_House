import useCart from "@/hooks/useCart";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
interface AddToCartProps {
  productId: number;
}

const AddToCart = ({ productId }: AddToCartProps) => {
  const { addItem, addItemMutation } = useCart();
  const addToCartHandler = () => {
    addItem(productId);
  };
  if(addItemMutation.isError) throw new Error("Can't add item to cart")
  return (
    <div className="mt-8 flex items-center gap-3">
      <button
        className="py-2 w-full rounded-md bg-indigo-500 text-white hover:bg-indigo-700 transition-colors min-[820px]:w-[50%]"
        onClick={addToCartHandler}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
