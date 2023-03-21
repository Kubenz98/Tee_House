import { fetchJson } from "@/lib/api";
import { useQuery } from "react-query";
import { User } from "@/lib/user";
import { useState } from "react";

const useUser = (): { user: User; userIsLoading: boolean } => {
  const [isFetchEnabled, setisFetchEnabled] = useState<boolean>(true);
  const query = useQuery(
    "user",
    async () => {
      try {
        return await fetchJson("/api/user");
      } catch (err) {
        return undefined;
      }
    },
    {
      cacheTime: Infinity,
      staleTime: 30_000, // ms
      enabled: isFetchEnabled,
    }
  );
  if (!query.data && !query.isLoading && isFetchEnabled) {
    setisFetchEnabled(false);
  }
  return { user: query.data, userIsLoading: query.isLoading };
};

export default useUser;
