import { fetchJson } from "./api";

export interface Product {
  id: number;
  imageURL: string;
  title: string;
  description: string;
  price: string;
}

const CMS_URL = process.env.CMS_URL;

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${CMS_URL}/api/products?populate=*`);

  return products.data.map(transformProduct);
};

export const getProduct = async (id: string): Promise<Product> => {
  const product = await fetchJson(`${CMS_URL}/api/products/${id}?populate=*`);
  return transformProduct(product.data);
};

const transformProduct = (product: any): Product => {
  return {
    id: product.id,
    title: product.attributes.name,
    description: product.attributes.description,
    price: `$${product.attributes.price}`,
    imageURL: `${CMS_URL}${product.attributes.image.data.attributes.url}`,
  };
};
