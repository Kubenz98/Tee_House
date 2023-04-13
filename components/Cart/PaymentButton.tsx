import useCart from "@/hooks/useCart";
import { calculateTotal } from "@/lib/cart";
import { useIsMutating } from "@tanstack/react-query";
import React from "react";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/framerVariants";

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
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Button
        className="block py-3 px-6 mx-auto mt-14 lg:mt-20 font-bold text-2xl"
        onClick={purchaseItemsHanlder}
        disabled={!!isMutating || cartQuery.isFetching}
      >
        Pay ${total}
      </Button>
    </motion.div>
  ) : null;
};

export default PaymentButton;
