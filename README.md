# TryIt

## TODO

- [x] Fetch countries and and display data in a table with name, code, continent and currency
- [] Show total number of search results found

Pagination:

Notes: Recoil doesn't seem to support React 19 so chose Jotai (similar atomic state management system) instead.

Bug: User can load page with a value that is not constrained to PAGINATION_PAGE_SIZE_OPTIONS

To Find Out: can I update URLSearchParams WITHIN an atom? must be able to

How am I able to use jotai values without a provider?

Showing 201-300 of 250 countries is confusing

- [x] Add next/previous page navigation with 10 results displayed by page and add page number to url
- [x] Display current page number and total pages
- [x] Add select to change entries-per-page: allowing [10, 20, 50, 100]

Filter:

handle loading and error states
maybe make dropdown reusable
change import alias

Add clear filters

there's a jotai recipe for deferring value idea for text inputs

- [] Add continent select button (dropdown) that allows users to filter by continent and reset page to 0
- [] Add currency select button (dropdown) that allows users to filter by continent and reset page to 0
- [] Add text input search for country code (exact match)
- [] Add text input search (regex for overlap) on name
  // set initial parameters
  Create Interactive Country
  Data Table Component
  Develop a responsive data table component that
  displays and manages country information fetched from
  the GraphQL endpoint. The table should provide
  comprehensive filtering, pagination, and search
  capabilities while following our established tech stack
  requirements.

Technical Stack

- React.js with TypeScript
- Vite as build tool
- Apollo GraphQL Client for data fetching
- Tailwind CSS for styling
- Formik (optional - for form management)
- Recoil (optional - for state management)
  Acceptance Criteria
  Data Display
- Fetch and display country data from the GraphQL
  endpoint
- Display columns for:
- Country name
- Country code
- Continent
- Currency

- Show total number of entries in the dataset

Pagination Features

- Implement table pagination controls
- Add entries-per-page selector with options:
- 10 entries
- 20 entries
- 50 entries
- 100 entries
- Display current page number and total pages
- Add Previous/Next page navigation
- Update URL to reflect current pagination state
  Filtering & Search
- Implement continent filter dropdown
- Add currency filter dropdown
- Create search functionality for:
- Country code (exact match)
- Country name (similarity/fuzzy search)
- Filters should be combinable
- Update results in real-time as filters change
  Technical Requirements
- Use TypeScript for all components and utilities
- Implement proper error handling for API calls
- Ensure responsive design works on all screen sizes
- Add loading states for async operations
- Implement proper type definitions for all GraphQL operations
  Additional Notes
- Design reference is provided for UX guidance only, not for pixel-perfect replication
- Consider implementing debounce for search operations
