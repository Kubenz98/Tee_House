import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faPowerOff,
  faRightToBracket,
  faShop,
  faTruck,
  faArrowUpShortWide,
  faArrowDownShortWide,
  faChevronUp,
  faChevronDown,
  faRectangleXmark,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "@/modules/ErrorBoundary";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

config.autoAddCss = false;

const { library } = require("@fortawesome/fontawesome-svg-core");
//require helps for hydration error

library.add(
  faCartShopping,
  faPowerOff,
  faRightToBracket,
  faTruck,
  faShop,
  faArrowUpShortWide,
  faArrowDownShortWide,
  faChevronUp,
  faChevronDown,
  faRectangleXmark,
  faCartPlus
);
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setTimeout(() => window.scrollTo(0, 0), 20)}
          >
            <Component {...pageProps} key={router.pathname} />
          </AnimatePresence>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
