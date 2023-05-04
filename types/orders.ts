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