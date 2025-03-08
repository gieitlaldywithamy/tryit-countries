import { useAtom } from "jotai";
import { ChangeEvent, useEffect, useState } from "react";
import { countryNameFilterAtom } from "../../lib/filterAtoms";
import { useDebounce } from "../../lib/useDebounce";

export const CountryNameFilter = () => {
  // confusing name here: this are only to keep the input from not lagging; im tired!
  const [localCountryName, setLocalCountryName] = useState("");
  const [, setCountryNameFilter] = useAtom(countryNameFilterAtom);

  const debouncedValue = useDebounce(localCountryName);
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCountryCode = event.target.value;
    setLocalCountryName(newCountryCode);
  };

  useEffect(() => {
    setCountryNameFilter(debouncedValue);
  }, [debouncedValue, setCountryNameFilter]);
  return (
    <input
      type="text"
      placeholder="Country Name"
      value={localCountryName}
      onBlur={handleFilterChange}
      onChange={handleFilterChange}
      className="w-full p-4 rounded-md border-gray-300 shadow-sm"
    />
  );
};
