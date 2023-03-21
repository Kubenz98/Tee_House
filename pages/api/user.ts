import { fetchJson, tokenValidation } from "@/lib/api";
import { NextApiHandler } from "next";

const { CMS_URL, JWT_SECRET } = process.env;

const handleUser: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(200).end()
    return;
  }
  try {
    if (!tokenValidation(jwt, JWT_SECRET!)) {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    const user = await fetchJson(`${CMS_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json({
      name: user.username,
      id: user.id,
    });
  } catch (err: any) {
    if (err.message === "fetch failed") {
      res.status(503).json({ error: "Failed to fetch" });
      return;
    }
    res.status(500).end();
  }
};

export default handleUser;
