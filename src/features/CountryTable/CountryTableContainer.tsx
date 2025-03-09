import { Suspense } from "react";
import { CountryTable } from "./CountryTable";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useGetCountries } from "./useGetCountries";

export const CountriesTableContainer = () => {
  const { error, data } = useGetCountries();

  if (error) {
    throw new Error("Failed to load countries");
  }
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CountryTable countries={data.countries} />
    </Suspense>
  );
};
