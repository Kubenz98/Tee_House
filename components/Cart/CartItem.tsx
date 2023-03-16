import Image from "next/image";
import Link from "next/link";
import { CartItemType } from "@/lib/cart";

interface CartItemProps {
  data: CartItemType;
}

const CartItem = ({ data }: CartItemProps) => {
  return (
    <div className="flex gap-3">
      <Link href={`/products/${data.product.id}`}>
        <Image
          src={data.product.image}
          width={150}
          height={150}
          alt="productImage"
        />
      </Link>
      <div className="flex flex-col">
        <h4 className="max-w-[120px]">{data.product.name}</h4>
        <span>{data.product.price}</span>
          <span>Quantity: {data.product.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
