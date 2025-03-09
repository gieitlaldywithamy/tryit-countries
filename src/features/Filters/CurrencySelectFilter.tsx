import { useSuspenseQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../utils/constants";
import { Suspense, useMemo } from "react";
import { GetCurrenciesQuery } from "../../__generated__/graphql";
import { currencyFilterAtom } from "../../lib/filterAtoms";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Dropdown } from "../../components/Dropdown";

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

export const CurrencySelectFilter = () => {
  const { error, data } = useSuspenseQuery(GET_CURRENCIES);

  const currencies = useMemo(() => {
    if (!data?.countries) {
      return [];
    }
    return getFlatAndUniqueCurrencies(data?.countries);
  }, [data?.countries]);

  if (error) {
    throw new Error("Failed to load filters");
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dropdown
        id="currency-filter"
        options={currencies.map((currency) => ({
          value: currency,
          key: currency,
          label: currency,
        }))}
        defaultValue=""
        defaultLabel="All Currencies"
        atom={currencyFilterAtom}
      />
    </Suspense>
  );
};
