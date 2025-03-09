import { Atom, atom, useSetAtom } from "jotai";
import {
  CountryFilterInput,
  StringQueryOperatorInput,
} from "../__generated__/graphql";
import { setCurrentPageAtom } from "./paginationAtoms";
import { capitalizeFirstLetter } from "../utils/capitaliseFirstLetter";

type FilterConfig = {
  atom: Atom<string>;
  field: keyof CountryFilterInput;
  transform?: (value: string) => string;
  queryOperator?: (value: string) => StringQueryOperatorInput;
};

const createFilterAtom = () => {
  const baseAtom = atom<string>("");
  const filterAtom = atom(
    (get) => get(baseAtom),
    (_, set, newValue: string) => {
      set(baseAtom, newValue);
      set(setCurrentPageAtom, 1);
    }
  );

  return filterAtom;
};

export const continentFilterAtom = createFilterAtom();
export const currencyFilterAtom = createFilterAtom();
export const countryCodeFilterAtom = createFilterAtom();
export const countryNameFilterAtom = createFilterAtom();

const filterConfigs: FilterConfig[] = [
  { atom: continentFilterAtom, field: "continent" },
  { atom: currencyFilterAtom, field: "currency" },
  { atom: countryCodeFilterAtom, field: "code" },
  {
    atom: countryNameFilterAtom,
    field: "name",
    transform: capitalizeFirstLetter,
    queryOperator: (value: string) => ({ regex: value }),
  },
];

export const filterAtom = atom((get) => {
  const filterValue: CountryFilterInput = {};

  filterConfigs.forEach((config) => {
    const { atom, field, transform, queryOperator } = config;
    const value = get(atom);
    if (!value) {
      return;
    }
    const transformedValue = transform ? transform(value) : value;
    const query = queryOperator
      ? queryOperator(transformedValue)
      : { eq: transformedValue };
    filterValue[field] = query;
  });

  return filterValue;
});

export const useResetFilters = () => {
  const setContinent = useSetAtom(continentFilterAtom);
  const setCurrency = useSetAtom(currencyFilterAtom);
  const setCountryCode = useSetAtom(countryCodeFilterAtom);
  const setCountryName = useSetAtom(countryNameFilterAtom);
  const setCurrentPage = useSetAtom(setCurrentPageAtom);

  return () => {
    setContinent("");
    setCurrency("");
    setCountryCode("");
    setCountryName("");
    setCurrentPage(1);
  };
};
