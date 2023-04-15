import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import Button from "./Buttons/Button";
import { motion } from "framer-motion";
import { list } from "@/lib/framerVariants";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  redirectToCart: () => void;
}

const Modal = ({ showModal, closeModal, redirectToCart }: ModalProps) => {
  let modalRoot;
  if (typeof window !== "undefined") {
    modalRoot = document.getElementById("modal-root");
  }
  const modal = (
    <div className="fixed inset-0 bg-black/50 z-50">
      <motion.div
        variants={list}
        initial="hidden"
        animate="show"
        exit="exit"
        className="fixed inset-x-4 top-[20%] desktop:top-[20%] min-w-[290px] mx-auto h-80 max-w-3xl bg-gray-100 dark:bg-neutral-700 rounded-xl"
      >
        <button className="absolute top-4 right-4" onClick={closeModal}>
          <FontAwesomeIcon icon={"rectangle-xmark"} width={30} />
        </button>
        <div className="mt-20">
          <h1 className="text-center text-2xl">Item added to the cart!</h1>
          <div className="flex flex-col gap-4 items-center mt-8">
            <Button className="w-3/4 py-2 max-w-xs" onClick={redirectToCart}>
              Show Cart
            </Button>
            <span>or</span>
            <Button className="w-3/4 py-2 max-w-xs" onClick={closeModal}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!showModal || !modalRoot) return null;

  return modalRoot && showModal && ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;
