import { Suspense } from "react";
import { ErrorMessage } from "../../components/ErrorMessage";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useGetCountries } from "./useGetCountries";
import { CountryTable } from "./CountryTable";

export const CountriesTableContainer = () => {
  const { error, data } = useGetCountries();
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CountryTable countries={data.countries} />
      <ErrorMessage error={error?.message} />
    </Suspense>
  );
};
