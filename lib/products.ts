import { fetchJson } from "./api";

export interface Product {
  id: number;
  imageURL: string;
  title: string;
  description: string;
  price: string;
  similarProducts: Product[];
}

const { CMS_URL } = process.env;

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(
    `${CMS_URL}/api/products?populate=*&sort=id:ASC`
  );
  return products.data.map(transformProduct);
};

export const getProduct = async (id: string): Promise<Product> => {
  const product = await fetchJson(
    `${CMS_URL}/api/products/${id}?populate=image&populate=similarProducts.image`
  );
  return transformProduct(product.data);
};

const transformSimilarProducts = (product: any) => {
  return {
    id: product.id,
    title: product.attributes.name,
    price: `$${product.attributes.price}`,
    imageURL: product?.attributes?.image?.data?.attributes.url,
  };
};

const transformProduct = (product: any): Product => {
  return {
    id: product.id,
    title: product.attributes.name,
    description: product.attributes.description,
    price: `$${product.attributes.price}`,
    imageURL: product.attributes.image.data.attributes.url,
    similarProducts: product.attributes.similarProducts.data.map(transformSimilarProducts)
  };
};
