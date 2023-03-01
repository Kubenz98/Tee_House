import NavBar from "@/components/NavBar";
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
    <>
      <Head>
        <title>Green House - your plants</title>
        <meta name="description" content="Get your favourite plants!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-2 py-1 text-stone-700">
        <h1 className="text-4xl text-center mt-12 mb-20">Bestsellers</h1>
        <ul className="mt-10 flex gap-5 flex-row flex-wrap justify-around mx-auto max-w-screen-2xl">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </>
  );
}
