import { useRouter } from "next/router";
import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const redirectToCart = () => {
    router.push("/cart");
  };
  return {
    showModal,
    handleOpenModal,
    handleCloseModal,
    redirectToCart,
  };
};

export default useModal;
