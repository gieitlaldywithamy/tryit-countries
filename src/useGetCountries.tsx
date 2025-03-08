import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_COUNTRIES } from "./constants";

export const useGetCountries = (variables = {}, options = {}) => {
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES, {
    variables,
    ...options,
  });

  useEffect(() => {
    refetch(variables);
  }, [variables, refetch]);

  return { loading, error, data, refetch };
};
