import { fetchJson } from "@/lib/api";
import { NextApiHandler } from "next";
import jsonweb, { JwtPayload } from "jsonwebtoken";

const { CMS_URL, JWT_SECRET } = process.env;

const handleUser: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    const decodedToken = jsonweb.verify(jwt, JWT_SECRET!) as JwtPayload;
    if (decodedToken.exp! < Date.now() / 1000) {
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
