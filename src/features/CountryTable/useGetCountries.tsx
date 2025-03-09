import { useSuspenseQuery } from "@apollo/client";
import { useAtom } from "jotai";
import { filterAtom } from "../../lib/filterAtoms";
import { GET_COUNTRIES } from "../../utils/constants";

export const useGetCountries = () => {
  const [filterValue] = useAtom(filterAtom);

  const { error, data } = useSuspenseQuery(GET_COUNTRIES, {
    variables: { filter: filterValue },
  });

  return { error, data };
};
