import { fetchJson } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/lib/user";
import { useState } from "react";

const useUser = (): { user: User; userIsLoading: boolean } => {

  const [isFetchEnabled, setisFetchEnabled] = useState<boolean>(true);
  
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        return await fetchJson("/api/user");
      } catch (err) {
        return null;
      }
    },
    staleTime: 0,
    cacheTime: 30_000, //ms
    refetchInterval: 30_000,
    enabled: isFetchEnabled,
  });
  if (!query.data && !query.isLoading && isFetchEnabled) {
    setisFetchEnabled(false);
  }
  return { user: query.data, userIsLoading: query.isLoading };
};

export default useUser;
