import { atom } from "jotai";
import { PAGINATION_PAGE_SIZE_OPTIONS } from "../constants";
import { updateURLSearchParams } from "../utils/updateURLSearchParams";

const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const pageSize = parseInt(params.get("pageSize") || "10", 10);
  const page = parseInt(params.get("page") || "1", 10);

  return {
    pageSize: isNaN(pageSize) ? 10 : pageSize,
    page: isNaN(page) ? 1 : page,
  };
};

export const currentPageAtom = atom<number>(getQueryParams().page);
export const perPageAtom = atom<PerPageOptions>(getQueryParams().pageSize);
export type PerPageOptions = (typeof PAGINATION_PAGE_SIZE_OPTIONS)[number];

export const perPageAtomWithUpdateSearchParams = atom(
  (get) => get(perPageAtom),
  (_, set, newPerPage: PerPageOptions) => {
    set(perPageAtom, newPerPage);
    set(currentPageAtom, 1);

    updateURLSearchParams({
      page: 1,
      perPage: newPerPage,
    });
  }
);

export const currentPageAtomWithUpdateSearchParams = atom(
  (get) => get(currentPageAtom),
  (get, set, newCurrentPage: number) => {
    set(currentPageAtom, newCurrentPage);

    updateURLSearchParams({
      page: newCurrentPage,
      perPage: get(perPageAtom),
    });
  }
);
