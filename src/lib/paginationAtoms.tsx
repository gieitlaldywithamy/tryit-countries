import { atom } from "jotai";
import { PerPageOptions } from "../utils/constants";
import { updateQueryParams } from "../utils/updateQueryParams";
import { getQueryParams } from "../utils/getQueryParams";

export const currentPageAtom = atom<number>(getQueryParams().page);
export const perPageAtom = atom<PerPageOptions>(getQueryParams().pageSize);

export const perPageAtomWithUpdateSearchParams = atom(
  (get) => get(perPageAtom),
  (_, set, newPerPage: PerPageOptions) => {
    set(perPageAtom, newPerPage);
    set(currentPageAtom, 1);

    updateQueryParams({
      page: 1,
      perPage: newPerPage,
    });
  }
);

export const currentPageAtomWithUpdateSearchParams = atom(
  (get) => get(currentPageAtom),
  (get, set, newCurrentPage: number) => {
    set(currentPageAtom, newCurrentPage);

    updateQueryParams({
      page: newCurrentPage,
      perPage: get(perPageAtom),
    });
  }
);
