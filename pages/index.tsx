import Page from "@/modules/common/Page";
import ProductItem from "@/modules/Products/components/ProductItem";
import { getProducts, Product } from "@/modules/Products/lib/products";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { list, title } from "@/lib/framerVariants";

interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await getProducts();
  return {
    props: { products },
  };
};

export default function Home({ products }: HomePageProps) {
  return (
    <Page title="">
      <motion.h1
        variants={title}
        initial="hidden"
        animate="show"
        exit="exit"
        className="text-4xl text-center mb-10"
      >
        T-shirts and more
      </motion.h1>
      <motion.ul
        variants={list}
        initial="hidden"
        animate="show"
        exit="exit"
        className="mt-10 flex gap-5 flex-row flex-wrap justify-around mx-auto max-w-[1600px]"
      >
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </motion.ul>
    </Page>
  );
}
