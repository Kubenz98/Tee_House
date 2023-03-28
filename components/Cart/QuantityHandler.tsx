import useCart from "@/hooks/useCart";
import { QuantityHandlerProps } from "@/lib/cart";
import React from "react";
import Button from "../Button";

const QuantityHandler = ({
  productId,
  action,
  quantityHandler,
  quantityHandlerMutation,
}: QuantityHandlerProps) => {

  const { cartRefetch } = useCart()

  const itemQuantityHandler = async () => {
    await quantityHandler({ productId, action });
    cartRefetch();
  };
  
  return (
    <Button
      onClick={itemQuantityHandler}
      disabled={quantityHandlerMutation.isLoading}
      className="py-1 w-[50px] text-xl font-black"
    >
      {action === "addOne" ? "+" : "-"}
    </Button>
  );
};

export default QuantityHandler;
