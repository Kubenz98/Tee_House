import { ProductIdAndAction } from "@/types/cart";
import jsonweb, { JwtPayload } from "jsonwebtoken";

export class ApiError extends Error {
  constructor(url: string, public status: number) {
    super(`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.status = status;
    this.name = "ApiError";
  }
}

export const fetchJson = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new ApiError(url, response.status);
  }
  return await response.json();
};

export const tokenValidation = (jwt: string, JWT_SECRET: string): boolean => {
  const decodedToken = jsonweb.verify(jwt, JWT_SECRET!) as JwtPayload;
  if (decodedToken.exp! < Date.now() / 1000) {
    return false;
  } else return true;
};

const cartRequest = (body: Object, method: string) => {
  return () =>
    fetchJson("/api/cart", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
};

export const cartFetch = (
  product: ProductIdAndAction | number,
  method: string
) => {
  if (typeof product === "object" && "action" in product) {
    const { productId, action } = product;
    return cartRequest({ productId, action }, method)();
  } else {
    return cartRequest({ product }, method)();
  }
};
