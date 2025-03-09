import { useAtom } from "jotai";
import { ChangeEvent, useEffect, useState } from "react";
import { countryCodeFilterAtom } from "../../lib/filterAtoms";
import { useDebounce } from "../../utils/useDebounce";

export const CountryCodeFilter = () => {
  // confusing name here: to keep the input from not lagging;
  const [localCountryCode, setLocalCountryCode] = useState("");
  const [, setCountryCodeFilter] = useAtom(countryCodeFilterAtom);

  const debouncedValue = useDebounce(localCountryCode);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCountryCode = event.target.value;
    setLocalCountryCode(newCountryCode);
  };

  useEffect(() => {
    setCountryCodeFilter(debouncedValue);
  }, [debouncedValue, setCountryCodeFilter]);

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
