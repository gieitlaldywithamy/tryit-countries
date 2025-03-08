import { atom } from "jotai";
import {
  CountryFilterInput,
  StringQueryOperatorInput,
} from "../__generated__/graphql";
import { currentPageAtom } from "./PaginationState";

export const continentAtom = atom<string>("");
export const filterAtom = atom((get) => {
  const continentFilter = get(continentAtom);
  const continentFilterValue: StringQueryOperatorInput = continentFilter
    ? {
        eq: continentFilter,
      }
    : {};
  const filterValue: CountryFilterInput = continentFilter
    ? {
        continent: continentFilterValue,
      }
    : {};
  return filterValue;
});

export const continentFilterAtom = atom(
  (get) => get(continentAtom),
  (_, set, newContinent: string) => {
    set(continentAtom, newContinent);
    set(currentPageAtom, 1);
  }
);
