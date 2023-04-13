export interface OrderItemProps {
  item: {
    price: string;
    product: {
      id: number;
      image: string;
      name: string;
      price: string;
    };
    quantity: number;
  };
}

interface OrderItem {
  price: string;
  product: {
    id: number;
    image: string;
    name: string;
    price: string;
  };
  quantity: number;
}

export interface OrderProps {
  order: {
    createdAt: string;
    id: number;
    orderAmount: string;
    orderItems: OrderItem[];
  };
}
export interface OrderInterface {
  createdAt: string;
  id: number;
  orderAmount: string;
  orderItems: OrderItem[];
}

export const transformOrder = (order: any) => {
  return {
    id: order.id,
    orderAmount: `$${order.attributes.totalAmount}`,
    createdAt: order.attributes.createdAt,
    orderItems: order.attributes.orderItems.data.map(transformOrderItem),
  };
};

const { CMS_URL } = process.env;

const transformOrderItem = (item: any) => {
  return {
    price: `$${item.attributes.price}`,
    quantity: item.attributes.quantity,
    product: {
      id: item.attributes.product.data.id,
      name: item.attributes.product.data.attributes.name,
      price: `$${item.attributes.product.data.attributes.price}`,
      image: CMS_URL + item.attributes.product.data.attributes.image.data.attributes.url,
    },
  };
};
