import { Product } from "@/modules/Products/lib/products";
import { UseMutationResult } from "@tanstack/react-query";

export interface CartItemType {
  cartItemId: number;
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    quantity: number;
    productTotal: number;
  };
}

export interface ProductIdAndAction {
  productId: number;
  action: string;
}

export interface QuantityHandlerProps extends ProductIdAndAction {
  quantityHandler: ({ productId, action }: ProductIdAndAction) => Promise<void>;
  quantityHandlerMutation: UseMutationResult<
    Product,
    Error,
    ProductIdAndAction
  >;
}