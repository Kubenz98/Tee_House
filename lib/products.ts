import { fetchJson } from "./apit";

export interface Product {
  id: number;
  imageURL: string;
  title: string;
  short_description: string;
  price: string;
}

const CMS_URL = process.env.CMS_URL;

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${CMS_URL}/api/products?populate=*`);

  return products.data.map(transformProduct);
};

const transformProduct = (product: any): Product => {
  return {
    id: product.id,
    title: product.attributes.name,
    short_description: product.attributes.short_description,
    price: `$${product.attributes.price}`,
    imageURL: `${CMS_URL}${product.attributes.image.data.attributes.url}`,
  };
};
