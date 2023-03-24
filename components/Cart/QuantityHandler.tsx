import { QuantityHandlerProps } from "@/lib/cart";
import React from "react";
import { useQueryClient } from "react-query";
import Button from "../Button";

const QuantityHandler = ({
  productId,
  action,
  quantityHandler,
  quantityHandlerMutation,
}: QuantityHandlerProps) => {
  const queryClient = useQueryClient();

  const itemQuantityHandler = async () => {
    await quantityHandler({ productId, action });
    queryClient.fetchQuery("cartItems");
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
