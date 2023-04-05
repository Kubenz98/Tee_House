import { useCallback } from "react";
import { fetchJson } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { OrderInterface } from "@/lib/orders";

const useOrders = () => {
  const ordersQuery = useQuery<OrderInterface[], Error>({
    queryKey: ["orders"],
    queryFn: () => fetchJson("api/orders"),
    enabled: false,
  });

  const ordersRefetch = useCallback(async () => {
    await ordersQuery.refetch();
  }, [ordersQuery.refetch]);

  return { ordersQuery, ordersRefetch }
};

export default useOrders;
