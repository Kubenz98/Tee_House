import { fetchJson } from "@/lib/api";
import { useQueryClient } from "react-query";

const useLogout = () => {
  const queryClient = useQueryClient();

  return async () => {
    await fetchJson("/api/logout");
    queryClient.setQueryData("user", undefined);
  };
};

export default useLogout;
