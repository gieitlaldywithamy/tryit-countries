import { atom } from "jotai";
import {
  CountryFilterInput,
  StringQueryOperatorInput,
} from "../__generated__/graphql";

export const continentFilterAtom = atom<string>("");
export const filterAtom = atom((get) => {
  const continentFilter = get(continentFilterAtom);
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
