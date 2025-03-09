## To run

First, run the development server (using package manager of choice! replace npm with pnpm or yarn):

```bash
npm install
npm run dev
```

Notes:
I've used Jotai rather than Recoil (Recoil doesn't seem to support React 19). Additionally, I've also not used Formik.
I've not included the Select Search Type Radio buttons as it wasn't on the requirements (so overlooked) and personally I find the user experience of changing what filters can be used a bit unintuitive.
Clearing filters doesn't clear the search inputs, I couldn't make a decision on this.
Note I haven't used graphql in years and never used jotai before so I'm unsure if I've architectured this well - I timeboxed this and I do not think it is in a PRable state. I've made the assumption Apollo Client does caching out of the box!
Error Boundaries could be well well improved.

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
