import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { list } from "@/lib/framerVariants";

interface ModalProps {
  showModal: boolean;
  children: ReactNode;
}

const Modal = ({ children, showModal }: ModalProps) => {
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
        className="fixed inset-0 px-4 py-6 mx-auto max-w-3xl bg-gray-100 desktop:top-[20%] desktop:bottom-auto desktop:pb-20 desktop:rounded dark:bg-neutral-700"
      >
        {children}
      </motion.div>
    </div>
  );

  return (modalRoot && showModal) ? ReactDOM.createPortal(modal, modalRoot) : null;
};

export default Modal;
