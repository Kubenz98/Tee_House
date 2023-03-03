import Page from "@/components/Page";
import { ApiError } from "@/lib/apit";
import { getProducts, getProduct, Product } from "@/lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

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
   throw new Error('id not set')
  }
  try {
    const product = await getProduct(id);
    return {
      props: { product },
    };
  } catch (err) {
    if(err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err
  }
};

const ProductPage = ({ product }: ProductProps) => {
  return (
    <Page
      title={`${product.title} |`}
      className="max-w-[1400px] mx-auto bg-slate-100 shadow"
    >
      <div className="flex flex-col items-center min-[820px]:flex-row min-[820px]:items-start">
        <div className="min-[600px]:max-w-[70%]">
          <Image
            src={product.imageURL}
            alt={product.title}
            priority
            width={723}
            height={482}
            className="m-auto"
          />
        </div>
        <div className="w-full min-[620px]:ml-3">
          <h2 className="text-4xl my-2 text-center font-semibold">
            {product.title}
          </h2>
          <div className="flex flex-col min-[820px]:max-w-xs mr-auto mt-6 py-2 font-slim border-t-2 border-b-2 border-gray-400 sm:text-lg lg:text-xl">
            <span>
              Availability:{" "}
              <span className="font-semibold">large quantity</span>
            </span>
            <span>
              Shipment: <span className="font-semibold">in 48 hours</span>
            </span>
            <span>
              Delivery: <span className="font-semibold">free, only today!</span>
            </span>
          </div>
          <p className="mt-8 font-semibold sm:text-lg lg:text-xl">
            {product.long_description}
          </p>
          {/* TODO: INPUT AND BUTTON */}
        </div>
      </div>
    </Page>
  );
};

export default ProductPage;
