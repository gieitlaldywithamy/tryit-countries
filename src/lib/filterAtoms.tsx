import { Atom, atom } from "jotai";
import {
  CountryFilterInput,
  StringQueryOperatorInput,
} from "../__generated__/graphql";
import { currentPageAtomWithUpdateSearchParams } from "./paginationAtoms";
import { capitalizeFirstLetter } from "../utils/capitaliseFirstLetter";

type FilterConfig = {
  atom: Atom<string>;
  field: keyof CountryFilterInput;
  transform?: (value: string) => string;
  queryOperator?: (value: string) => StringQueryOperatorInput;
};

const createFilterAtom = (initialValue: string) => {
  const baseAtom = atom<string>(initialValue);

  const filterAtom = atom(
    (get) => get(baseAtom),
    (_, set, newValue: string) => {
      set(baseAtom, newValue);
      set(currentPageAtomWithUpdateSearchParams, 1);
    }
  );

  return { baseAtom, filterAtom };
};

// are these any different ???
export const { baseAtom: continentAtom, filterAtom: continentFilterAtom } =
  createFilterAtom("");
export const { baseAtom: currencyAtom, filterAtom: currencyFilterAtom } =
  createFilterAtom("");
export const { baseAtom: countryCodeAtom, filterAtom: countryCodeFilterAtom } =
  createFilterAtom("");
export const { baseAtom: countryNameAtom, filterAtom: countryNameFilterAtom } =
  createFilterAtom("");

// type this
export const filterConfigs: FilterConfig[] = [
  {
    atom: continentAtom,
    field: "continent",
  },
  {
    atom: currencyAtom,
    field: "currency",
  },
  {
    atom: countryCodeAtom,
    field: "code",
  },
  {
    atom: countryNameAtom,
    field: "name",
    transform: capitalizeFirstLetter,
    queryOperator: (value: string) => ({ regex: value }),
  },
];

export const filterAtom = atom((get) => {
  const filterValue: CountryFilterInput = {};

  filterConfigs.forEach((config) => {
    const filter = get(config.atom);
    if (filter) {
      const transformedValue = config.transform
        ? config.transform(filter)
        : filter;
      const query = config.queryOperator
        ? config.queryOperator(transformedValue)
        : { eq: transformedValue }; // Default equality
      filterValue[config.field] = query;
    }
  });

  return filterValue;
});
