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

export const PAGINATION_PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
