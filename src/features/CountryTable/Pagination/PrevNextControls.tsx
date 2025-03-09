import { useAtom } from "jotai";
import { setCurrentPageAtom } from "../../../lib/paginationAtoms";

export const PrevNextControls = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useAtom(setCurrentPageAtom);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <span className="mx-2">
        Page {currentPage <= totalPages ? currentPage : 0} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};
