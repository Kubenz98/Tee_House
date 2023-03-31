import Page from "@/components/Page";
import React, { useEffect } from "react";
import useCart from "@/hooks/useCart";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import CartList from "@/components/Cart/CartList";
import PaymentButton from "@/components/PaymentButton";
import { itemVariants, parentVariants, title } from "@/lib/framerMotion";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartRefetch } = useCart();
  const { user, userIsLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await cartRefetch();
    })();
  }, [cartRefetch]);

  if (!user && !userIsLoading) {
    router.push("/");
  }

  return (
    <Page title="Cart |" className="max-w-[1400px] mx-auto bg-slate-100 shadow">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1
          variants={itemVariants}
          className=" mb-20 text-4xl font-semibold text-center"
        >
          Cart
        </motion.h1>
        <CartList />
        <PaymentButton />
      </motion.div>
    </Page>
  );
};

export default Cart;
