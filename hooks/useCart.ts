import { fetchJson } from "@/lib/api";
import { CreateCart } from "@/lib/cart";
import { Product } from "@/lib/products";
import { useMutation, useQuery } from "react-query";

const useCart = () => {

  const query = useQuery(
    "cartItems",
    () => fetchJson("/api/cart"),
    { enabled: false }
  );
  const addItemMutation = useMutation<Product, Error, number>((productId) =>
    fetchJson("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    })
  );
  const addItem = async (productId: number) => {
    await addItemMutation.mutateAsync(productId);
  };
  let cart = query.data
  if(query.data) {
    cart = CreateCart(query.data)
  }
  return { cart, cartIsLoading: query.isLoading, addItem, addItemMutation };
};

export default useCart;
