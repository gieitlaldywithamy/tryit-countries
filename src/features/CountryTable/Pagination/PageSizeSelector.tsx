import { useAtom } from "jotai";
import { useCallback } from "react";
import { setPerPageAtom } from "../../../lib/paginationAtoms";
import {
  PAGINATION_PAGE_SIZE_OPTIONS,
  PerPageOptions,
} from "../../../utils/constants";

export const PageSizeSelector = () => {
  const [perPage, setPerPage] = useAtom(setPerPageAtom);

  const handlePageSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newPerPage = parseInt(event.target.value, 10) as PerPageOptions;
      setPerPage(newPerPage);
    },
    [setPerPage]
  );

  return (
    <div className="">
      <label htmlFor="pageSize" className="mr-2">
        Countries per page
      </label>
      <select
        id="pageSize"
        className="px-2 py-1 border radius"
        onChange={handlePageSizeChange}
        value={perPage}
      >
        {PAGINATION_PAGE_SIZE_OPTIONS.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
