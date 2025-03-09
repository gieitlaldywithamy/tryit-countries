import { ContinentSelect } from "./features/Filters/ContinentSelect";
import { CountryCode } from "./features/Filters/CountryCode";
import { CountryNameFilter } from "./features/Filters/CountryName";
import { CurrencySelect } from "./features/Filters/CurrencySelect";
import { CountriesTableContainer } from "./features/CountryTable/CountryTableContainer";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Country Finder</h1>
      <ReactErrorBoundary FallbackComponent={ErrorMessage}>
        <div className="flex gap-4 mb-2">
          <ContinentSelect />
          <CurrencySelect />
        </div>
        <div className="flex gap-4">
          <CountryCode />
          <CountryNameFilter />
        </div>
      </ReactErrorBoundary>
      <CountriesTableContainer />
    </div>
  );
}

export default App;
