import Page from "@/modules/common/Page";
import ProductItem from "@/modules/Products/components/ProductItem";
import { getProducts, Product } from "@/modules/Products/lib/products";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { list, title } from "@/lib/framerVariants";
import Categories from "@/modules/Products/Categories/components/Categories";
import { CategoryType, getCategories } from "@/modules/Products/Categories/lib/categories";

interface HomePageProps {
  products: Product[];
  categories: CategoryType[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await getProducts();
  const categories = await getCategories();
  return {
    props: { products, categories },
  };
};

export default function Home({ products, categories }: HomePageProps) {
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
      <div className="min-[1024px]:flex min-[700px]:justify-center min-[700px]:mt-10">
        <Categories categories={categories}/>
        <motion.ul
          variants={list}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-1 gap-2 max-w-[1400px] min-[600px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1800px]:grid-cols-4"
        >
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </motion.ul>
      </div>
    </Page>
  );
}
