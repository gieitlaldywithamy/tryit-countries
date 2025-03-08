import { useSuspenseQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../constants";
import { continentFilterAtom } from "../../lib/filterAtoms";
import { useAtom } from "jotai";
import { ChangeEvent, Suspense } from "react";
import { LoadingSpinner } from "../../LoadingSpinner";

export const ContinentSelect = () => {
  const [currentContinent, setCurrentContinent] = useAtom(continentFilterAtom);
  const { error, data } = useSuspenseQuery(GET_CONTINENTS);

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newContinent = event.target.value;
    setCurrentContinent(newContinent);
  };
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="w-3/4 text-sm text-gray-700">
        <select
          id="continentFilter"
          className="w-full p-4 rounded-md border-gray-300 shadow-sm"
          onChange={handleFilterChange}
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
    </Suspense>
  );
};
