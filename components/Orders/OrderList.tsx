import useOrders from "@/hooks/useOrders";
import React, { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import Order from "./Order";
import { OrderInterface } from "@/lib/orders";
import { motion } from "framer-motion";
import { parentVariants, title } from "@/lib/framerVariants";

const OrderList = () => {
  const { ordersQuery, ordersRefetch } = useOrders();

  const { data } = ordersQuery;

  useEffect(() => {
    (() => ordersRefetch())();
  }, [ordersRefetch]);

  if (data && data.length === 0) {
    return (
      <motion.h2
        variants={title}
        initial="hidden"
        animate="show"
        exit="exit"
        className="mt-10 text-xl text-center"
      >
        There are no orders
      </motion.h2>
    );
  }

  return (
    <motion.ul
      variants={parentVariants}
      initial="hidden"
      animate="show"
      className="mt-16 mx-auto max-w-[900px]"
    >
      {data ? (
        data.map((order: OrderInterface) => (
          <Order key={order.id} order={order} />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </motion.ul>
  );
};

export default OrderList;
