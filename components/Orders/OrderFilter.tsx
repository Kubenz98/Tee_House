import useOrders from "@/hooks/useOrders";
import { title } from "@/lib/framerVariants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const OrderFilter = () => {
  const { changeFilter } = useOrders();
  const router = useRouter();
  let buttonClasses = "mb-4 transition-transform";
  if (router.query.sort === "asc") {
    buttonClasses += " rotate-180";
  }

  return (
    <motion.div
      variants={title}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-end mx-auto max-w-[900px]"
    >
      <button className={buttonClasses} onClick={changeFilter}>
        <FontAwesomeIcon icon="arrow-up-short-wide" width={27} />
      </button>
    </motion.div>
  );
};

export default OrderFilter;
