import { fetchJson } from "@/lib/api";
import { CreateCart } from "@/lib/cart";
import { Product } from "@/lib/products";
import { useMutation, useQuery } from "react-query";

interface ProductsPut {
  productId: number;
  action: string;
}

const useCart = () => {
  const query = useQuery("cartItems", () => fetchJson("/api/cart"), {
    enabled: false,
  });
  
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

  let cart = query.data;
  if (query.data) {
    cart = CreateCart(query.data);
  }
  return {
    cart,
    cartIsLoading: query.isLoading,
    addItem,
    addItemToCartMutation,
    addItemQuantity,
    addItemQuantityMutation,
    removeItemQuantity,
    removeItemQuantityMutation,
  };
};

export default useCart;
