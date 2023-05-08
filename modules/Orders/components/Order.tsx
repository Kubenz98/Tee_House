import React from "react";
import OrderItem from "./OrderItem";
import { OrderProps } from "@/types/orders";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/framerVariants";

const Order = ({ order }: OrderProps) => {
  const date = new Date(order.createdAt);

  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="mb-6 bg-white rounded dark:bg-neutral-700"
    >
      <h2 className="font-normal mb-4 pl-2 pt-2 italic text-center">
        Created at {date.toLocaleString()}
      </h2>
      {order.orderItems.map((item, index) => (
        <OrderItem key={index} item={item} />
      ))}
      <div>
        <h3 className="text-center font-semibold">DELIVERY DETAILS</h3>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <span className="font-semibold">
            name: <span className="font-normal">{order.checkout.name}</span>
          </span>
          <span className="font-semibold">
            street: <span className="font-normal">{order.checkout.street}</span>
          </span>
          <span className="font-semibold">
            city: <span className="font-normal">{order.checkout.city}</span>
          </span>
          <span className="font-semibold">
            postal code:
            <span className="font-normal">{order.checkout.postalCode}</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-10 border p-2 font-semibold">
        <span>Total amount</span>
        <span className="pr-2">{order.orderAmount}</span>
      </div>
    </motion.li>
  );
};

export default Order;
