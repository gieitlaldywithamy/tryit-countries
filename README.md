## To run

First, run the development server (using package manager of choice! replace npm with pnpm or yarn):

```bash
npm install
npm run dev
```

Notes:

- I chose to use Jotai instead of Recoil, as Recoil doesn’t seem to support React 19. Based on my understanding, their logic appears to be similar at a surface level. Additionally, I didn’t use Formik in this implementation.
- I’ve also excluded the “Select Search Type” radio buttons, as they weren’t part of the original requirements. Personally, I find the idea of dynamically changing the available filters a bit unintuitive from a user experience perspective.
- It’s worth mentioning that I haven’t worked with GraphQL in years, and I’m new to Jotai, so I’m not entirely confident in the architecture. I timeboxed the work, and it’s not yet in a state suitable for a PR. I’ve also assumed that Apollo Client handles caching out of the box.
- Lastly, error boundaries could definitely be improved.

## TODO

- [x] Fetch countries and and display data in a table with name, code, continent and currency
- [x] Show total number of search results found
- [x] Add continent select button (dropdown) that allows users to filter by continent and reset page to 0
- [x] Add currency select button (dropdown) that allows users to filter by continent and reset page to 0
- [x] Add text input search for country code (exact match)
- [x] Add text input search (regex for overlap) on name
- [x] Add next/previous page navigation with 10 results displayed by page and add page number to url
- [x] Display current page number and total pages
- [x] Add select to change entries-per-page: allowing [10, 20, 50, 100]
