import useCart from "@/hooks/useCart";
import { calculateTotal } from "@/lib/cart";
import { useIsMutating } from "@tanstack/react-query";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const PaymentButton = () => {
  const { cartQuery, purchaseItems } = useCart();
  const router = useRouter();

  const purchaseItemsHanlder = async () => {
    await purchaseItems();
    router.push("/orders");
  };

  const isMutating = useIsMutating();

  let total = 0;

  if (cartQuery.data) {
    total = calculateTotal(cartQuery.data);
  }

  return total ? (
    <Button
      className="block py-3 px-6 mx-auto mt-14 lg:mt-20 font-bold text-2xl"
      onClick={purchaseItemsHanlder}
      disabled={!!isMutating || cartQuery.isFetching}
      itemVariant={true}
    >
      Pay ${total}
    </Button>
  ) : null;
};

export default PaymentButton;
