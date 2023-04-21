import { Product } from "@/lib/products";
import React from "react";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { list, title } from "@/lib/framerVariants";

interface SimilarProductsProps {
  products: Product[];
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  return (
    <>
      <motion.h1
        variants={title}
        initial="hidden"
        animate="show"
        exit="exit"
        className="text-4xl text-center my-14"
      >
        Similar products
      </motion.h1>
      <motion.ul
        variants={list}
        initial="hidden"
        animate="show"
        exit="exit"
        className="mt-10 flex gap-5 flex-row flex-wrap justify-around mx-auto max-w-[1600px]"
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </motion.ul>
    </>
  );
};

export default SimilarProducts;
