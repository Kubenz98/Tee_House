import useCart from "@/hooks/useCart";
import { useQueryClient } from "react-query";

interface QuantityHandleProps {
  productId: number;
}

const ItemQuantityHandle = ({ productId }: QuantityHandleProps) => {
  const {
    addItemQuantity,
    addItemQuantityMutation,
    removeItemQuantity,
    removeItemQuantityMutation,
  } = useCart();

  const queryClient = useQueryClient();
  let action;

  const addItemHandler = async () => {
    action = "addOne";
    await addItemQuantity({ productId, action });
    queryClient.fetchQuery("cartItems");
  };

  const removeItemHandler = async () => {
    action = "subtractOne";
    await removeItemQuantity({ productId, action });
    queryClient.fetchQuery("cartItems");
  };
  const buttonClassName =
    "text-lg w-[50px] rounded-md bg-indigo-500 text-white md:hover:bg-indigo-700 transition-colors disabled:opacity-50";
  return (
    <div className="flex gap-1 mt-auto mb-2">
      <button
        onClick={addItemHandler}
        disabled={addItemQuantityMutation.isLoading}
        className={buttonClassName}
      >
        +
      </button>
      <button
        onClick={removeItemHandler}
        disabled={removeItemQuantityMutation.isLoading}
        className={buttonClassName}
      >
        -
      </button>
    </div>
  );
};

export default ItemQuantityHandle;
