import { useQuery, useSuspenseQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./constants";
import { useAtom } from "jotai";
import { filterAtom } from "./lib/filterAtoms";

export const useGetCountries = () => {
  const [filterValue] = useAtom(filterAtom);

  const { error, data, refetch } = useSuspenseQuery(GET_COUNTRIES, {
    variables: { filter: filterValue },
    // ...options,
  });

  return { error, data, refetch };
};
