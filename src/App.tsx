import { ContinentSelect } from "./components/Filters/ContinentSelect";
import { CountryCode } from "./components/Filters/CountryCode";
import { CountryNameFilter } from "./components/Filters/CountryName";
import { CurrencySelect } from "./components/Filters/CurrencySelect";
import { CountriesContainer } from "./containers/CountriesContainer";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Country Finder</h1>
      <div className="flex gap-4 mb-2">
        <ContinentSelect />
        <CurrencySelect />
      </div>
      <div className="flex gap-4">
        <CountryCode />
        <CountryNameFilter />
      </div>
      <CountriesContainer />
    </div>
  );
}

export default App;
