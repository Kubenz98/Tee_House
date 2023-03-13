import { fetchJson, tokenValidation } from "@/lib/api";
import { NextApiHandler } from "next";

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

export default handlePostCart;
