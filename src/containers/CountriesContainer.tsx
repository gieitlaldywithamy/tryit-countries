import { Suspense } from "react";
import { CountryTable } from "../components/Table";
import { ErrorMessage } from "../ErrorMessage";
import { LoadingSpinner } from "../LoadingSpinner";
import { useGetCountries } from "../useGetCountries";

export const CountriesContainer = () => {
  const { error, data } = useGetCountries();
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CountryTable countries={data.countries} />
      <ErrorMessage error={error?.message} />
    </Suspense>
  );
};
