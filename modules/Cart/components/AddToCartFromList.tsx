import useCart from "@/hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LoadingSpinner from "@/modules/common/LoadingSpinner";
import useModal from "@/hooks/useModal";
import Modal from "@/modules/Modal/components/Modal";
import AddItemContent from "@/modules/Modal/components/AddItemContent";

interface AddFromListProps {
  productId: number;
}

const AddToCartFromList = ({ productId }: AddFromListProps) => {
  const { addItem, addItemToCartMutation } = useCart();
  const { showModal, handleOpenModal, handleCloseModal, redirectToCart } =
    useModal();

  if (addItemToCartMutation.isLoading) return <LoadingSpinner />;
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
      <FontAwesomeIcon
        icon={"cart-plus"}
        width={30}
        onClick={(e) => addItem(e, {productId, handleOpenModal})}
        className="hover:scale-110 hover: transition-transform"
      />
    </>
  );
};

export default AddToCartFromList;
