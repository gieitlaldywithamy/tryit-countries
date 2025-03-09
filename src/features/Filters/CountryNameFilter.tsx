import { useAtom } from "jotai";
import { ChangeEvent } from "react";
import {
  countryNameFilterAtom,
  countryNameFilterDisplay,
} from "../../lib/filterAtoms";

export const CountryNameFilter = () => {
  // confusing name here: this are only to keep the input from not lagging; im tired!
  const [localCountryName] = useAtom(countryNameFilterDisplay);
  const [, setCountryNameFilter] = useAtom(countryNameFilterAtom);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCountryCode = event.target.value;
    setCountryNameFilter(newCountryCode);
  };

  return (
    <input
      type="search"
      placeholder="Country Name"
      value={localCountryName}
      onBlur={handleFilterChange}
      onChange={handleFilterChange}
      className="w-full p-4 rounded-md border-gray-300 shadow-sm"
    />
  );
};
