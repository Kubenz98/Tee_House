import Page from "@/components/Page";
import React, { useEffect } from "react";
import useCart from "@/hooks/useCart";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import CartList from "@/components/Cart/CartList";
import PaymentButton from "@/components/PaymentButton";

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
      <h1 className=" mb-20 text-4xl font-semibold text-center">Cart</h1>
      <CartList />
      <PaymentButton />
    </Page>
  );
};

export default Cart;
