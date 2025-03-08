import { ContinentSelect } from "./components/Filters/ContinentSelect";
import { CountryTable } from "./components/Table";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingSpinner } from "./LoadingSpinner";
import { useGetCountries } from "./useGetCountries";

function App() {
  const { loading, error, data } = useGetCountries();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Country Finder</h1>
      <ContinentSelect />
      {data && data.countries && <CountryTable countries={data.countries} />}
      <ErrorMessage error={error?.message} />
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default App;
