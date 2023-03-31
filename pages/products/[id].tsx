import AddToCart from "@/components/AddToCart";
import Page from "@/components/Page";
import { ApiError } from "@/lib/api";
import { getProducts, getProduct, Product } from "@/lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import useUser from "@/hooks/useUser";
import { motion } from "framer-motion";
import { itemVariants, parentVariants } from "@/lib/framerMotion";

interface ProductProps {
  product: Product;
}

interface ProductParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<ProductParams> = async () => {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ProductProps,
  ProductParams
> = async ({ params }) => {
  const id = params?.id;
  if (!id) {
    throw new Error("id not set");
  }
  try {
    const product = await getProduct(id);
    return {
      props: { product },
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
};

const ProductPage = ({ product }: ProductProps) => {
  const { user } = useUser();
  return (
    <Page
      title={`${product.title} |`}
      className="max-w-[1400px] mx-auto bg-slate-100 shadow"
    >
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex flex-col items-center min-[820px]:flex-row min-[820px]:items-center"
      >
        <motion.div variants={itemVariants} className="max-w-[455px]">
          <Image
            src={product.imageURL}
            alt={product.title}
            priority
            width={455}
            height={455}
            className="m-auto"
          />
        </motion.div>
        <div className="max-w-[455px] min-[820px]:ml-10">
          <motion.h2
            variants={itemVariants}
            className="text-3xl my-8 font-semibold"
          >
            {product.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="sm:text-lg lg:text-xl">
            {product.description}
          </motion.p>
          <motion.span
            variants={itemVariants}
            className="block my-6 min-[820px]:my-8 text-2xl"
          >
            {product.price}
          </motion.span>
          {user && <AddToCart productId={product.id} />}
        </div>
      </motion.div>
    </Page>
  );
};

export default ProductPage;
