import useOrders from "@/hooks/useOrders";
import React, { useEffect } from "react";
import LoadingSpinner from "@/modules/common/LoadingSpinner";
import Order from "./Order";
import { OrderInterface } from "@/types/orders";
import { motion } from "framer-motion";
import { parentVariants, title } from "@/lib/framerVariants";
import { useRouter } from "next/router";
import OrderFilter from "./OrderFilter";

const OrderList = () => {
  const { ordersQuery, ordersRefetch } = useOrders();
  const router = useRouter();
  const { data, isFetching } = ordersQuery;

  useEffect(() => {
    if (router.isReady && router.pathname === "/orders") {
      (async () => await ordersRefetch())();
    }
  }, [ordersRefetch, router.pathname, router.isReady, router.query]);

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
    <div className="mt-16">
      {data && data.length > 1 && <OrderFilter />}
      <motion.ul
        variants={parentVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[900px]"
      >
        {data && !isFetching ? (
          data.map((order: OrderInterface) => (
            <Order key={order.id} order={order} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </motion.ul>
    </div>
  );
};

export default OrderList;
