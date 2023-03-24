import { fetchJson } from "@/lib/api";
import { CreateCart, ProductsPut } from "@/lib/cart";
import { Product } from "@/lib/products";
import { useMutation, useQuery } from "react-query";

const useCart = () => {
  const addItemToCartMutation = useMutation<Product, Error, number>(
    (productId) =>
      fetchJson("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      })
  );
  const addItem = async (productId: number) => {
    await addItemToCartMutation.mutateAsync(productId);
  };

  const addItemQuantityMutation = useMutation<Product, Error, ProductsPut>(
    ({ productId, action }) =>
      fetchJson("/api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, action }),
      })
  );

  const addItemQuantity = async ({ productId, action }: ProductsPut) => {
    await addItemQuantityMutation.mutateAsync({ productId, action });
  };

  const removeItemQuantityMutation = useMutation<Product, Error, ProductsPut>(
    ({ productId, action }) =>
      fetchJson("api/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, action }),
      })
  );

  const removeItemQuantity = async ({ productId, action }: ProductsPut) => {
    await removeItemQuantityMutation.mutateAsync({ productId, action });
  };

  const purchaseItemsMutation = useMutation<Product[], Error>(() =>
    fetchJson("api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  const purchaseItems = async () => {
    await purchaseItemsMutation.mutateAsync();
  };

  const cartQuery = useQuery("cartItems", () => fetchJson("/api/cart"), {
    enabled: false,
  });

  let cart = cartQuery.data;
  if (cartQuery.data) {
    cart = CreateCart(cartQuery.data);
  }
  return {
    cart,
    cartIsLoading: cartQuery.isLoading,
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
