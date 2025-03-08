import { gql } from "../src/__generated__/gql";

export const GET_COUNTRIES = gql(`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      capital
      currency
      emoji
    }
  }
`);

export const API_URL = "https://countries.trevorblades.com";
