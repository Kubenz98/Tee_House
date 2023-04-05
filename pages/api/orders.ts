import { fetchJson, tokenValidation } from "@/lib/api";
import { transformOrder } from "@/lib/orders";
import { NextApiHandler } from "next";

const { CMS_URL, JWT_SECRET } = process.env;

const handleGetOrders: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }
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
    const orders = await fetchJson(
      `${CMS_URL}/api/orders?populate[orderItems][populate][product][populate]=image&sort=createdAt:DESC`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json(orders.data.map(transformOrder));
  } catch (err) {
    console.log(err)
    res.status(400).end();
  }
};

export default handleGetOrders;