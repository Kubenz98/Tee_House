import NavBar from "@/components/NavBar";
import Page from "@/components/Page";
import ProductItem from "@/components/ProductItem";
import { getProducts, Product } from "@/lib/products";
import { GetStaticProps } from "next";
import Head from "next/head";

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
      <h1 className="text-4xl text-center mb-10">Bestsellers</h1>
      <ul className="mt-10 flex gap-5 flex-row flex-wrap justify-around mx-auto max-w-[1800px]">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </Page>
  );
}
