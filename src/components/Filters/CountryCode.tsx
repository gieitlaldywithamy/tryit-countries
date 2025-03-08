import { useAtom } from "jotai";
import { ChangeEvent, useEffect, useState } from "react";
import { countryCodeFilterAtom } from "../../lib/filterAtoms";
import { useDebounce } from "../../lib/useDebounce";

export const CountryCode = () => {
  // confusing name here: this are only to keep the input from not lagging; im tired!
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
      type="text"
      placeholder="Country Code"
      value={localCountryCode}
      onBlur={handleFilterChange}
      onChange={handleFilterChange}
      className="w-full p-4 rounded-md border-gray-300 shadow-sm"
    />
  );
};
