import { fetchJson } from "@/lib/api";
import { Product } from "@/lib/products";
import { useMutation } from "react-query";

const useCart = () => {
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
    try {
      await addItemMutation.mutateAsync(productId);
    } catch (err: any) {
      throw new Error(err);
    }
  };
  return { addItem }
};

export default useCart
