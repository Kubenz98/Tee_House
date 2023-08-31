import Page from "@/modules/common/Page";
import ProductItem from "@/modules/Products/components/ProductItem";
import { getProducts, Product } from "@/modules/Products/lib/products";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { list, title } from "@/lib/framerVariants";
import Categories from "@/modules/Products/Categories/components/Categories";

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
        className="text-4xl text-center mb-10 min-[700px]:mb-20"
      >
        T-shirts and more
      </motion.h1>
      <div className="min-[700px]:flex min-[700px]:justify-center min-[700px]:mt-10">
        <Categories />
        <motion.ul
          variants={list}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex gap-3 flex-row flex-wrap justify-center mx-auto max-w-[1600px]"
        >
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </motion.ul>
      </div>
    </Page>
  );
}
