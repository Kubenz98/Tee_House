import { useRouter } from "next/router";
import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = (
    e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>
  ) => {
    e.preventDefault();
    setShowModal(false);
  };
  const redirectToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
