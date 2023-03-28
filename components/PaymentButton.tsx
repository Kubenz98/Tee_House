import useCart from "@/hooks/useCart";
import { CalculateTotal } from "@/lib/cart";
import { useIsMutating } from "@tanstack/react-query";
import React from "react";
import Button from "./Button";

const PaymentButton = () => {
  const { cartQuery, purchaseItems, cartRefetch } = useCart();

  const purchaseItemsHanlder = async () => {
    await purchaseItems();
    await cartRefetch();
  };

  const isMutating = useIsMutating();

  let total = 0;

  if (cartQuery.data) {
    total = CalculateTotal(cartQuery.data);
  }

  return total ? (
    <Button
      className="block py-3 px-6 mx-auto mt-14 lg:mt-20 font-bold text-2xl"
      onClick={purchaseItemsHanlder}
      disabled={!!isMutating}
    >
      Pay ${total}
    </Button>
  ) : null;
};

export default PaymentButton;
