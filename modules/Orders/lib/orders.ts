
export const transformOrder = (order: any) => {
  return {
    id: order.id,
    createdAt: order.attributes.createdAt,
    checkout: order.attributes.checkout,
    orderAmount: `$${order.attributes.totalAmount}`,
    orderItems: order.attributes.orderItems.data.map(transformOrderItem),
  };
};

const transformOrderItem = (item: any) => {
  return {
    price: `$${item.attributes.price}`,
    quantity: item.attributes.quantity,
    product: {
      id: item.attributes.product.data.id,
      name: item.attributes.product.data.attributes.name,
      price: `$${item.attributes.product.data.attributes.price}`,
      image: item.attributes.product.data.attributes.image.data.attributes.url,
    },
  };
};
