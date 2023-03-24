import { fetchJson } from "@/lib/api";
import { useQueryClient } from '@tanstack/react-query';

const useLogout = () => {
  const queryClient = useQueryClient();

  return async () => {
    await fetchJson("/api/logout");
    queryClient.setQueryData(["user"], null);
  };
};

export default useLogout;
