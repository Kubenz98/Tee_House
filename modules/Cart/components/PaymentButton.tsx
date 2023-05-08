import useCart from "@/hooks/useCart";
import { calculateTotal } from "../lib/cart";
import { useIsMutating } from "@tanstack/react-query";
import React from "react";
import Button from "@/modules/common/Buttons/Button";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/framerVariants";
import useModal from "@/hooks/useModal";
import Modal from "@/modules/Modal/components/Modal";
import CheckoutContent from "@/modules/Modal/components/CheckoutContent";

const PaymentButton = () => {
  const { cartQuery } = useCart();
  const { showModal, handleOpenModal, handleCloseModal } = useModal();

  const isMutating = useIsMutating();

  let total = 0;

  if (cartQuery.data) {
    total = calculateTotal(cartQuery.data);
  }

  return total ? (
    <>
      {showModal && (
        <Modal showModal={showModal}>
          <CheckoutContent closeModal={handleCloseModal} />
        </Modal>
      )}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Button
          className="block py-3 px-6 mx-auto mt-14 lg:mt-20 font-bold text-2xl"
          onClick={() => handleOpenModal()}
          disabled={!!isMutating || cartQuery.isFetching}
        >
          Pay ${total}
        </Button>
      </motion.div>
    </>
  ) : null;
};

export default PaymentButton;
