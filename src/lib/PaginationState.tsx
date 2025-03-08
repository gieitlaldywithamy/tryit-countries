import { atom } from "jotai";
import { PAGINATION_PAGE_SIZE_OPTIONS } from "../constants";

const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const pageSize = parseInt(params.get("pageSize") || "10", 10);
  const page = parseInt(params.get("page") || "1", 10);

  return {
    pageSize: isNaN(pageSize) ? 10 : pageSize,
    page: isNaN(page) ? 1 : page,
  };
};

export const currentPageAtom = atom(getQueryParams().page);
export const perPageAtom = atom(getQueryParams().pageSize);
export type PerPageOptions = (typeof PAGINATION_PAGE_SIZE_OPTIONS)[number];
