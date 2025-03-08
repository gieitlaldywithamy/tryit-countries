import { useAtom } from "jotai";
import { useCallback } from "react";
import { perPageAtom, PerPageOptions } from "../lib/PaginationState";
import { PAGINATION_PAGE_SIZE_OPTIONS } from "../constants";

const updateURLSearchParams = ({
  page,
  perPage,
}: {
  page: number;
  perPage: PerPageOptions;
}) => {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page.toString());
  params.set("perPage", perPage.toString());
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${params.toString()}`
  );
};

export const PageSizeSelector = () => {
  const [perPage, setPerPage] = useAtom(perPageAtom);

  const handlePageSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newPerPage = parseInt(event.target.value, 10) as PerPageOptions;
      setPerPage(newPerPage);
      updateURLSearchParams({ page: 1, perPage: newPerPage });
    },
    [setPerPage]
  );

  return (
    <div className="">
      <label htmlFor="pageSize" className="font-medium text-gray-700 mr-2">
        Countries per page
      </label>
      <select
        id="pageSize"
        className="px-2 py-1 border radius"
        onChange={handlePageSizeChange}
        value={perPage}
      >
        {PAGINATION_PAGE_SIZE_OPTIONS.map((pageSize) => (
          <option value={pageSize}>{pageSize}</option>
        ))}
      </select>
    </div>
  );
};
