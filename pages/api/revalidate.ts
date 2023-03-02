import { NextApiHandler } from "next";

const handleRevalidate: NextApiHandler = (req, res) => {
  console.log("/api/revalidate received:", req.body);
  res.status(204).end();
};

export default handleRevalidate;
