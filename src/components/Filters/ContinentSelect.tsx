import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../constants";
import { continentFilterAtom } from "../../lib/FilterState";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

export const ContinentSelect = () => {
  const [currentContinent, setCurrentContinent] = useAtom(continentFilterAtom);
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  const handleCurrencyFilterChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const newContinent = event.target.value;
    setCurrentContinent(newContinent);
  };
  return (
    <div className="w-3/4 text-sm text-gray-700">
      <select
        id="currencyFilter"
        className="w-full p-4 rounded-md border-gray-300 shadow-sm"
        onChange={handleCurrencyFilterChange}
        value={currentContinent}
      >
        <option value="">Continent</option>
        {data?.continents.map((continent) => (
          <option key={continent.code} value={continent.code}>
            {continent.name}
          </option>
        ))}
      </select>
    </div>
  );
};
