import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../constants";
import { ChangeEvent, useMemo } from "react";
import { GetCurrenciesQuery } from "../../__generated__/graphql";
import { currencyFilterAtom } from "../../lib/filterAtoms";
import { useAtom } from "jotai";

const getFlatAndUniqueCurrencies = (
  currencies: GetCurrenciesQuery["countries"]
): string[] => {
  const uniqueStrs = new Set<string>();

  currencies.forEach((currency) => {
    if (!currency) {
      return;
    }
    currency.currency?.split(",").forEach((value) => {
      uniqueStrs.add(value.trim());
    });
  });

  return Array.from(uniqueStrs);
};

// should be a lazy query
export const CurrencySelect = () => {
  const [currentCurrency, setCurrentCurrency] = useAtom(currencyFilterAtom);
  // make sure this is cached!!
  const { loading, error, data } = useQuery(GET_CURRENCIES);
  console.log({ error });
  const currencies = useMemo(() => {
    if (loading || !data?.countries) {
      return [];
    }
    return getFlatAndUniqueCurrencies(data?.countries);
  }, [data?.countries, loading]);

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value;
    setCurrentCurrency(newCurrency);
  };

  return (
    <div className="w-1/3 text-sm text-gray-700">
      <select
        id="continentFilter"
        className="w-full p-4 rounded-md border-gray-300 shadow-sm"
        onChange={handleFilterChange}
        value={currentCurrency}
      >
        <option value="">Currency</option>
        {currencies?.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
