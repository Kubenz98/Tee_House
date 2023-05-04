import useCart from "@/hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LoadingSpinner from "@/modules/common/LoadingSpinner";

interface AddFromListProps {
  productId: number;
}

const AddToCartFromList = ({ productId }: AddFromListProps) => {
  const { addItem, addItemToCartMutation } = useCart();

  const clickIcon = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    addItem(productId);
  };
  if (addItemToCartMutation.isLoading) return <LoadingSpinner />;
  if (addItemToCartMutation.isError) throw new Error("Can't add item to cart");
  return (
    <FontAwesomeIcon
      icon={"cart-plus"}
      width={30}
      onClick={clickIcon}
      className="hover:scale-110 hover: transition-transform"
    />
  );
};

export default AddToCartFromList;
