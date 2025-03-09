import { useSuspenseQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../utils/constants";
import { continentFilterAtom } from "../../lib/filterAtoms";
import { Suspense } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Dropdown } from "../../components/Dropdown";

export const ContinentSelect = () => {
  const { error, data } = useSuspenseQuery(GET_CONTINENTS);

  if (error) {
    throw new Error("Failed to load filters");
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dropdown
        id={"select-continent"}
        options={data.continents.map(({ code, name }) => ({
          value: code,
          key: code,
          label: name,
        }))}
        defaultValue={""}
        defaultLabel={"All Continents"}
        atom={continentFilterAtom}
      />
    </Suspense>
  );
};
