import { UseMutationResult } from "react-query";
import { Product } from "./products";

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

export interface ProductsPut {
  productId: number;
  action: string;
}

interface ProductIdAndAction {
  productId: number;
  action: string;
}

export interface QuantityHandlerProps extends ProductIdAndAction {
  quantityHandler: ({ productId, action }: ProductIdAndAction) => Promise<void>;
  quantityHandlerMutation: UseMutationResult<Product, Error, ProductsPut>;
}

const CMS_URL = process.env.CMS_URL;

export const transformCartItem = (cartItem: any): CartItemType => {
  return {
    cartItemId: cartItem.id,
    product: {
      id: cartItem.attributes.product.data.id,
      name: cartItem.attributes.product.data.attributes.name,
      image:
        CMS_URL +
        cartItem.attributes.product.data.attributes.image.data.attributes.url,
      price: `$${cartItem.attributes.product.data.attributes.price}`,
      quantity: cartItem.attributes.quantity,
      productTotal:
        cartItem.attributes.product.data.attributes.price *
        cartItem.attributes.quantity,
    },
  };
};

export const CreateCart = (cartItems: CartItemType[]) => {
  let total = 0.0;
  let cart = [];
  for (const cartItem of cartItems) {
    total += cartItem.product.productTotal;
    cart.push(cartItem);
  }
  return { items: cart, total: total.toFixed(2) };
};
