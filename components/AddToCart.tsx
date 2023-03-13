import useCart from "@/hooks/useCart";
import React from "react";

interface AddToCartProps {
  productId: number;
}

const AddToCart = ({ productId }: AddToCartProps) => {
  const { addItem } = useCart()
  const addToCartHandler = () => {
    addItem(productId)
  };
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
