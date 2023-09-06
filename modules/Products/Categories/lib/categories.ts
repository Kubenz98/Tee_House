import { fetchJson } from "@/lib/api";
import { Product } from "../../lib/products";
import { transformProduct } from "../../lib/products";

const { CMS_URL } = process.env;

export interface CategoryType {
  id: number;
  attributes: {
    name: string;
  };
}

export const getCategoryProducts = async (
  category: string
): Promise<Product[]> => {
  const categoryProducts = await fetchJson(
    `${CMS_URL}/api/products?populate=image&populate=categories&populate=similarProducts.image&filters[categories][name][$eq]=${category}`
  );
  return categoryProducts.data.map(transformProduct);
};

export const getCategories = async (): Promise<CategoryType[]> => {
  const categories = await fetchJson(`${CMS_URL}/api/categories`);
  return categories.data;
};
