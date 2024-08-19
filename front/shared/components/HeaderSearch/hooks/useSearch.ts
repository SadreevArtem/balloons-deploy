import { useState } from "react";
import { useRouter } from "next/router";

export const useSearch = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSearch = (search: string, searchTypeIndex?: number) => {
    setLoading(true);
    return router
      .push({ pathname: "/search", query: { name: search, type: String(searchTypeIndex ?? "") } })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, onSearch };
};
