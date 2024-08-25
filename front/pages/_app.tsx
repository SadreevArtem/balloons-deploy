import "@/styles/globals.css";
import { HydrationBoundary,QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as NextPageWithLayout).getLayout ?? ((page: ReactElement) => page)
  const [queryClient] = useState(()=> new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }))
  return getLayout(
    <QueryClientProvider client={queryClient}>
       <HydrationBoundary state={pageProps.dehydratedState}>
      <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}