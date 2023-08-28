import Page from "@/modules/common/Page";
import { ApiError } from "@/lib/api";
import { getProducts, Product } from "@/modules/Products/lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { motion } from "framer-motion";
import {
  list,
  title,
} from "@/lib/framerVariants";
import Categories from "@/modules/Products/Categories/components/Categories";
import { getCategoryProducts } from "@/modules/Products/Categories/lib/categories";
import ProductItem from "@/modules/Products/components/ProductItem";

interface ProductsProps {
  products: Product;
}

interface ProductParams extends ParsedUrlQuery {
  category: string;
}

export const getStaticPaths: GetStaticPaths<ProductParams> = async () => {
  const products = await getProducts();
  const categories = products.map((product) => product.gender);
  const uniqueCategories = [...new Set(categories)];
  return {
    paths: uniqueCategories.map((category) => ({
      params: { category: category.toString()},
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ProductsProps,
  ProductParams
> = async ({ params }) => {
  const category = params?.category;
  if (!category) {
    throw new Error("category not set");
  }
  try {
    const products = await getCategoryProducts(category);
    return {
      props: { products },
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
};

interface CategoryProps {
  products: Product[];
}

export default function Category({ products }: CategoryProps) {
  return (
    <Page title="">
      <motion.h1
        variants={title}
        initial="hidden"
        animate="show"
        exit="exit"
        className="text-4xl text-center mb-10"
      >
        Category Products
      </motion.h1>
      <div className="min-[700px]:flex min-[700px]:mt-10">
        <Categories />
        <motion.ul
          variants={list}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex gap-5 flex-row flex-wrap justify-around mx-auto max-w-[1200px]"
        >
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </motion.ul>
      </div>
    </Page>
  );
}
