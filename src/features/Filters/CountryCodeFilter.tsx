import { useAtom } from "jotai";
import { ChangeEvent } from "react";
import {
  countryCodeFilterAtom,
  countryCodeFilterDisplay,
} from "../../lib/filterAtoms";

export const CountryCodeFilter = () => {
  // confusing name here: to keep the input from not lagging;
  const [localCountryCode] = useAtom(countryCodeFilterDisplay);
  const [, setCountryCodeFilter] = useAtom(countryCodeFilterAtom);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCountryCode = event.target.value;
    setCountryCodeFilter(newCountryCode);
  };

  return (
    <input
      id="search-country-codes"
      name="search-country-codes"
      type="search"
      placeholder="Country Code"
      value={localCountryCode}
      onBlur={handleFilterChange}
      onChange={handleFilterChange}
      className="w-full p-4 rounded-md border-gray-300 shadow-sm"
    />
  );
};
