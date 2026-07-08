import "@/styles/globals.css";
import { MetricsConsent } from "@/shared/components/MetricsConsent/MetricsConsent";
import { useCartStore } from "@/shared/stores/cartStore";
import { useFavoriteStore } from "@/shared/stores/favoriteStore";
import {
  HydrationBoundary,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const hydrateFavorite = useFavoriteStore((state) => state.hydrateFavorite);
  const hydrateCart = useCartStore((state) => state.hydrateCart);
  const getLayout =
    (Component as NextPageWithLayout).getLayout ??
    ((page: ReactElement) => page);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  useEffect(() => {
    hydrateFavorite();
    hydrateCart();
  }, [hydrateCart, hydrateFavorite]);

  return getLayout(
    <>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <MetricsConsent />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
