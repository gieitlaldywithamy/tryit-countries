import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { API_URL } from "./utils/constants.ts";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: API_URL,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <ReactErrorBoundary FallbackComponent={ErrorBoundary}>
        <App />
      </ReactErrorBoundary>
    </ApolloProvider>
  </StrictMode>
);
