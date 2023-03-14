
import "@/styles/globals.css";
import {
  faCartShopping,
  faPowerOff,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

const { library } = require("@fortawesome/fontawesome-svg-core");
//require helps for hydration error

export default function App({ Component, pageProps }: AppProps) {
  library.add(faCartShopping, faPowerOff, faRightToBracket);
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
