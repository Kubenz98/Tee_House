import { cartFetch, fetchJson } from "@/lib/api";
import { CartItemType, ProductIdAndAction } from "@/types/cart";
import { Product } from "@/modules/Products/lib/products";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

interface AddToCartArgs {
  productId: number;
  handleOpenModal: () => void;
}

const useCart = () => {
  const addItemToCartMutation = useMutation<Product, Error, number>({
    mutationFn: (productId) => cartFetch(productId, "POST"),
  });

  const addItem = async (
    e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>,
    { productId, handleOpenModal }: AddToCartArgs
  ) => {
    e.preventDefault();
    const status = await addItemToCartMutation.mutateAsync(productId);
    status && handleOpenModal();
  };

  const quantityHandlerMutation = useMutation<
    Product,
    Error,
    ProductIdAndAction
  >({
    mutationFn: ({ productId, action }) =>
      cartFetch({ productId, action }, "PUT"),
  });

  const quantityHandler = async ({ productId, action }: ProductIdAndAction) => {
    await quantityHandlerMutation.mutateAsync({ productId, action });
  };

  const purchaseItemsMutation = useMutation<Product[], Error, checkoutObject>({
    mutationFn: (checkout) =>
      fetchJson("api/cart", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkout),
      }),
  });

  interface checkoutObject {
    name: string;
    street: string;
    postalCode: string;
    city: string;
  }

  const purchaseItems = async (checkout: checkoutObject) => {
    await purchaseItemsMutation.mutateAsync(checkout);
  };

  const cartQuery = useQuery<CartItemType[], Error>({
    queryKey: ["cartItems"],
    queryFn: () => fetchJson("/api/cart"),
    enabled: false,
    cacheTime: 0,
  });

  const cartRefetch = useCallback(async () => {
    await cartQuery.refetch();
  }, [cartQuery]);

  return {
    cartQuery,
    cartRefetch,
    addItem,
    addItemToCartMutation,
    quantityHandler,
    quantityHandlerMutation,
    purchaseItems,
    purchaseItemsMutation,
  };
};

export default useCart;
