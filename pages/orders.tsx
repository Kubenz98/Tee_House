import Page from "@/modules/common/Page";
import { motion } from "framer-motion";
import { title } from "@/lib/framerVariants";
import OrderList from "@/modules/Orders/components/OrderList";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

const Orders = () => {
  const { user, userIsLoading } = useUser();
  const router = useRouter();

  if (!user && !userIsLoading) {
    router.push("/");
  }
  return (
    <Page
      title="Orders | "
      className="max-w-[1400px] mx-auto bg-slate-100 shadow"
    >
      <motion.h1
        variants={title}
        initial="hidden"
        animate="show"
        exit="exit"
        className="text-4xl font-semibold text-center"
      >
        Your orders
      </motion.h1>
      <OrderList />
    </Page>
  );
};

export default Orders;
