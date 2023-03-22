import Image from "next/image";
import Link from "next/link";
import { CartItemType } from "@/lib/cart";
import ItemQuantityHandle from "./ItemQuantityHandle";

interface CartItemProps {
  data: CartItemType;
}

const CartItem = ({ data }: CartItemProps) => {
  const { product } = data;
  const productId = data.cartItemId;

  return (
    <div className="flex gap-3">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          width={150}
          height={150}
          alt="productImage"
        />
      </Link>
      <div className="flex flex-col">
        <h4 className="max-w-[120px] font-semibold leading-1">{product.name}</h4>
        <span>{product.price}</span>
        <span>Quantity: {product.quantity}</span>
        <ItemQuantityHandle productId={productId} />
      </div>
    </div>
  );
};

export default CartItem;
