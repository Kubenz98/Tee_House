import Image from "next/image";
import Link from "next/link";
import { OrderItemProps } from "@/lib/orders";

const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <div className="flex mb-4 p-4">
      <Link href={`/products/${item.product.id}`}>
        <Image
          width={100}
          height={100}
          src={item.product.image}
          alt="This is a order item image"
        />
      </Link>
      <div className="w-full ml-2">
        <h3 className="text-lg">{item.product.name}</h3>
        <div className="flex justify-between">
          <span>
            {item.quantity} x {item.product.price}
          </span>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
