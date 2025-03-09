import { useAtom } from "jotai";
import { setPerPageAtom } from "../lib/paginationAtoms";
import { useCallback } from "react";
import { useResetFilters } from "../lib/filterAtoms";

export const ErrorMessage = ({ error }: { error?: string }) => {
  const [, resetPerPageAndPage] = useAtom(setPerPageAtom);
  const clearFilters = useResetFilters();

  const onClick = useCallback(() => {
    resetPerPageAndPage(10);
    clearFilters();
  }, [clearFilters, resetPerPageAndPage]);

  if (!error) {
    return null;
  }
  return (
    <div
      role="alert"
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4 text-center"
    >
      <p>
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline ml-2">Something went wrong!</span>
      </p>
      <button
        className="mt-4 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        Try again
      </button>
    </div>
  );
};
