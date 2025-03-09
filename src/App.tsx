import { ContinentSelectFilter } from "./features/Filters/ContinentSelectFilter";
import { CountryCodeFilter } from "./features/Filters/CountryCodeFilter";
import { CountryNameFilter } from "./features/Filters/CountryNameFilter";
import { CurrencySelectFilter } from "./features/Filters/CurrencySelectFilter";
import { CountriesTableContainer } from "./features/CountryTable/CountryTableContainer";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Country Finder</h1>
      <ReactErrorBoundary FallbackComponent={ErrorMessage}>
        <div className="flex gap-4 mb-2">
          <ContinentSelectFilter />
          <CurrencySelectFilter />
        </div>
        <div className="flex gap-4">
          <CountryCodeFilter />
          <CountryNameFilter />
        </div>
      </ReactErrorBoundary>
      <CountriesTableContainer />
    </div>
  );
}

export default App;
