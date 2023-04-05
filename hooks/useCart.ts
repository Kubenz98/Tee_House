import { fetchJson } from "@/lib/api";
import { CartItemType, ProductsPut } from "@/lib/cart";
import { Product } from "@/lib/products";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

const useCart = () => {
  const addItemToCartMutation = useMutation<Product, Error, number>({
    mutationFn: (productId) =>
      fetchJson("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      }),
  });

  const addItem = async (productId: number) => {
    await addItemToCartMutation.mutateAsync(productId);
  };

  const addItemQuantityMutation = useMutation<Product, Error, ProductsPut>({
    mutationFn: ({ productId, action }) =>
      fetchJson("api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, action }),
      }),
  });

  const addItemQuantity = async ({ productId, action }: ProductsPut) => {
    await addItemQuantityMutation.mutateAsync({ productId, action });
  };

  const removeItemQuantityMutation = useMutation<Product, Error, ProductsPut>({
    mutationFn: ({ productId, action }) =>
      fetchJson("api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, action }),
      }),
  });

  const removeItemQuantity = async ({ productId, action }: ProductsPut) => {
    await removeItemQuantityMutation.mutateAsync({ productId, action });
  };

  const purchaseItemsMutation = useMutation<Product[], Error>({
    mutationFn: () =>
      fetchJson("api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });

  const purchaseItems = async () => {
    await purchaseItemsMutation.mutateAsync();
  };

  const cartQuery = useQuery<CartItemType[], Error>({
    queryKey: ["cartItems"],
    queryFn: () => fetchJson("/api/cart"),
    enabled: false,
    cacheTime: 0,
  });

  const cartRefetch = useCallback(async () => {
    await cartQuery.refetch();
  }, [cartQuery.refetch]);

  return {
    cartQuery,
    cartRefetch,
    addItem,
    addItemToCartMutation,
    addItemQuantity,
    addItemQuantityMutation,
    removeItemQuantity,
    removeItemQuantityMutation,
    purchaseItems,
    purchaseItemsMutation,
  };
};

export default useCart;
