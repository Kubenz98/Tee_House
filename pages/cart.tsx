import Page from "@/components/Page";
import React, { useEffect } from "react";
import useCart from "@/hooks/useCart";
import useUser from "@/hooks/useUser";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import CartList from "@/components/Cart/CartList";

const Cart = () => {
  const { cart, cartIsLoading } = useCart();
  const { user, userIsLoading } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    queryClient.fetchQuery("cartItems");
  }, [queryClient]);

  if (!user && !userIsLoading) {
    router.push("/");
  }
  return (
    <Page title="Cart |" className="max-w-[1400px] mx-auto bg-slate-100 shadow">
      <h1 className=" mb-8 text-4xl font-semibold text-center">Cart</h1>
      {cartIsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CartList cart={cart} />
          {!!cart?.total && (
            <h2 className="mt-10 lg:mt-20 text-4xl text-center font-bold">
              Total: ${cart.total}
            </h2>
          )}
        </>
      )}
    </Page>
  );
};

export default Cart;
