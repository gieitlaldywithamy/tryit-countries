import { ApolloError } from "@apollo/client";
import { ErrorMessage } from "./ErrorMessage";

export const ErrorBoundary = ({ error }: { error?: ApolloError }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-8 text-center">Country Finder</h1>
    <ErrorMessage error={error?.message} />
  </div>
);
