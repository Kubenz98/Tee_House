import Page from "@/components/Page";
import React, { useEffect } from "react";
import useCart from "@/hooks/useCart";
import useUser from "@/hooks/useUser";
import { useIsMutating } from "@tanstack/react-query";
import { useRouter } from "next/router";
import CartList from "@/components/Cart/CartList";
import Button from "@/components/Button";

const Cart = () => {
  const { cart, cartRefetch, cartIsLoading, purchaseItems, cartIsFetching } =
    useCart();

  const { user, userIsLoading } = useUser();
  const router = useRouter();
  const isMutatingItems = useIsMutating();

  useEffect(() => {
    (async () => {
      await cartRefetch();
    })();
  }, [cartRefetch]);

  if (!user && !userIsLoading) {
    router.push("/");
  }

  const purchaseItemsHanlder = async () => {
    await purchaseItems();
    await cartRefetch();
  };
  return (
    <Page title="Cart |" className="max-w-[1400px] mx-auto bg-slate-100 shadow">
      <h1 className=" mb-20 text-4xl font-semibold text-center">Cart</h1>
      {cartIsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CartList cart={cart} />
          {!!cart?.total && (
            <Button
              className="block py-3 px-6 mx-auto mt-14 lg:mt-20 font-bold text-2xl"
              onClick={purchaseItemsHanlder}
              disabled={!!isMutatingItems || cartIsFetching}
            >
              Pay: ${cart.total}
            </Button>
          )}
        </>
      )}
    </Page>
  );
};

export default Cart;
