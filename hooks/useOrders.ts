import { useCallback } from "react";
import { fetchJson } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { OrderInterface } from "@/lib/orders";
import { useRouter } from "next/router";

const useOrders = () => {
  const router = useRouter();

  let url = "api/orders?sort=desc";

  if (router.query.sort) {
    url = `api/orders?sort=${router.query.sort}`;
  }

  const ordersQuery = useQuery<OrderInterface[], Error>({
    queryKey: ["orders"],
    queryFn: () => fetchJson(url),
    enabled: false,
  });

  const ordersRefetch = useCallback(async () => {
    await ordersQuery.refetch();
  }, [ordersQuery.refetch]);

  const changeFilter = async () => {
    if (router.query.sort === "asc") {
      router.replace({
        query: { ...router.query, sort: "desc" },
      });
    } else {
      router.replace({
        query: { ...router.query, sort: "asc" },
      });
    }
  };

  return { ordersQuery, ordersRefetch, changeFilter };
};

export default useOrders;
