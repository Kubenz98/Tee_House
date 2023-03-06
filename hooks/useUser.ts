import { fetchJson } from "@/lib/api";
import { useQuery } from "react-query";
import { User } from "@/lib/user";

const useUser = (): { user: User } => {
  const query = useQuery(
    "user",
    async () => {
      try {
        return await fetchJson("api/user");
      } catch (err) {
        return undefined;
      }
    },
    {
      cacheTime: Infinity,
      staleTime: 30_000, // ms
    }
  );
  return { user: query.data };
};

export default useUser;
