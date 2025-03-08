import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./constants";
import { useAtom } from "jotai";
import { filterAtom } from "./lib/FilterState";

export const useGetCountries = () => {
  const [filterValue] = useAtom(filterAtom);

  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES, {
    variables: { filter: filterValue },
    // ...options,
  });

  return { loading, error, data, refetch };
};
