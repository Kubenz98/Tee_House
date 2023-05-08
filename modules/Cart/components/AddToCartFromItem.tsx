import useCart from "@/hooks/useCart";
import React from "react";
import Button from "../../common/Buttons/Button";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/framerVariants";
import useModal from "@/hooks/useModal";
import Modal from "../../Modal/components/Modal";
import AddItemContent from "@/modules/Modal/components/AddItemContent";

interface AddToCartProps {
  productId: number;
}

const AddToCart = ({ productId }: AddToCartProps) => {
  const { addItem, addItemToCartMutation, cartQuery } = useCart();
  const { showModal, handleOpenModal, handleCloseModal, redirectToCart } =
    useModal();

  const addToCartHandler = async () => {
    const status = await addItem(productId);
    status && handleOpenModal();
  };
  if (addItemToCartMutation.isError) throw new Error("Can't add item to cart");

  return (
    <>
      {showModal && (
        <Modal showModal={showModal}>
          <AddItemContent
            closeModal={handleCloseModal}
            redirect={redirectToCart}
          />
        </Modal>
      )}
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
    </>
  );
};

export default AddToCart;
