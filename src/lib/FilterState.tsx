import { atom } from "jotai";
import {
  CountryFilterInput,
  StringQueryOperatorInput,
} from "../__generated__/graphql";
import {
  currentPageAtom,
  currentPageAtomWithUpdateSearchParams,
} from "./PaginationState";

export const continentAtom = atom<string>("");
export const currencyAtom = atom<string>("");
export const filterAtom = atom((get) => {
  const continentFilter = get(continentAtom);
  const currencyFilter = get(currencyAtom);
  const continentFilterValue: StringQueryOperatorInput = continentFilter
    ? {
        eq: continentFilter,
      }
    : {};
  const filterValue: CountryFilterInput = {};
  if (currencyFilter) {
    filterValue.currency = { eq: currencyFilter };
  }
  if (continentFilter) {
    filterValue.continent = { eq: continentFilter };
  }
  console.log({ filterValue });
  // const currencyFilterValue: StringQueryOperatorInput = currencyFilter
  //   ? {
  //       eq: currencyFilter,
  //     }
  //   : {};
  // const filterValue: CountryFilterInput = continentFilter
  //   ? {
  //       continent: continentFilterValue,
  //     }
  //   : {};
  return filterValue;
});

export const continentFilterAtom = atom(
  (get) => get(continentAtom),
  (_, set, newContinent: string) => {
    set(continentAtom, newContinent);
    set(currentPageAtomWithUpdateSearchParams, 1);
  }
);

export const currencyFilterAtom = atom(
  (get) => get(currencyAtom),
  (_, set, newCurrency: string) => {
    set(currencyAtom, newCurrency);
    set(currentPageAtomWithUpdateSearchParams, 1);
  }
);
