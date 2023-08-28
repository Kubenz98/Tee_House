import { fetchJson } from "@/lib/api";
import { Product } from "../../lib/products";
import { transformProduct } from "../../lib/products";

const { CMS_URL } = process.env;

export const getCategoryProducts = async (
  category: string
): Promise<Product> => {
  const categoryProducts = await fetchJson(
    `${CMS_URL}/api/products?populate=image&populate=similarProducts.image&filters[gender][$eq]=${category}`
  );
  return categoryProducts.data.map(transformProduct);
};
