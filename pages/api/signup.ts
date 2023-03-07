import { fetchJson } from "@/lib/api";
import { NextApiHandler } from "next";
import cookie from "cookie";

const { CMS_URL } = process.env;

const signupHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { username, email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(
      `${CMS_URL}/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, {
          path: "/api",
          httpOnly: true,
        })
      )
      .json({ name: user.username, id: user.id });
  } catch (err) {
    res.status(400).end();
  }
};

export default signupHandler;
