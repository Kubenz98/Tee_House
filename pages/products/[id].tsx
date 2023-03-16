import AddToCart from "@/components/AddToCart";
import Page from "@/components/Page";
import { ApiError } from "@/lib/api";
import { getProducts, getProduct, Product } from "@/lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import useUser from "@/hooks/useUser"

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
  const { user } = useUser()
  return (
      <Page
        title={`${product.title} |`}
        className="max-w-[1400px] mx-auto bg-slate-100 shadow"
      >
        <div className="flex flex-col items-center min-[820px]:flex-row min-[820px]:items-center">
          <div className="max-w-[455px]">
            <Image
              src={product.imageURL}
              alt={product.title}
              priority
              width={455}
              height={455}
              className="m-auto"
            />
          </div>
          <div className="max-w-[455px] min-[620px]:ml-10">
            <h2 className="text-3xl my-2 font-semibold">{product.title}</h2>
            <p className="mt-8 sm:text-lg lg:text-xl">{product.description}</p>
            {user && <AddToCart productId={product.id} />}
          </div>
        </div>
      </Page>
  );
};

export default ProductPage;
