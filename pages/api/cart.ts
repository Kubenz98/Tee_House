import { fetchJson, tokenValidation } from "@/lib/api";
import { NextApiHandler } from "next";
import { transformCartItem } from "@/lib/cart";

const { CMS_URL, JWT_SECRET } = process.env;

const handlePostCart: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    if (!tokenValidation(jwt, JWT_SECRET!)) {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    const { productId } = req.body;
    await fetchJson(`${CMS_URL}/api/cart-items`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { product: productId } }),
    });
    res.status(200).json({ message: `Added product ${productId}` });
  } catch (err) {
    res.status(400).end();
  }
};

const handleGetCart: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    if (!tokenValidation(jwt, JWT_SECRET!)) {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    const cart = await fetchJson(
      `${CMS_URL}/api/cart-items?populate=product&populate=product.image`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json(cart.data.map(transformCartItem));
  } catch (err) {}
};

const handlePutCart: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    if (!tokenValidation(jwt, JWT_SECRET!)) {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    const { productId, action } = req.body;
    await fetchJson(`${CMS_URL}/api/cart-items/${productId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, id: productId }),
    });
    res.status(200).json({ message: `${action} ${productId}` });
  } catch (err) {
    res.status(400).end();
  }
};

const handleCart: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "POST":
      return handlePostCart(req, res);
    case "GET":
      return handleGetCart(req, res);
    case "PUT":
      return handlePutCart(req, res);
    default:
      res.status(405).end();
  }
};

export default handleCart;
