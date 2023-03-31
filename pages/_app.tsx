import "@/styles/globals.css";
import {
  faCartShopping,
  faPowerOff,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const { library } = require("@fortawesome/fontawesome-svg-core");
//require helps for hydration error

export default function App({ Component, pageProps, router }: AppProps) {
  library.add(faCartShopping, faPowerOff, faRightToBracket);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => setTimeout(() => window.scrollTo(0, 0), 20)}
        >
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
