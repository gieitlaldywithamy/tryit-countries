import { useAtomValue } from "jotai";
import { GetCountriesQuery } from "../__generated__/graphql";
import { currentPageAtom, perPageAtom } from "../lib/PaginationState";
import { PageSizeSelector } from "./PageSizeSelector";
import Pagination from "./Pagination";

const TableHeader = ({ columns }: { columns: string[] }) => {
  return (
    <thead>
      <tr className="bg-gray-50">
        {columns.map((column, index) => (
          <th
            key={index}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="px-6 py-4 whitespace-nowrap">{children}</td>
);

export const CountryTable = ({
  countries,
}: {
  countries: GetCountriesQuery["countries"];
}) => {
  const countryCount = countries.length;
  const perPageCount = useAtomValue(perPageAtom);
  const currentPage = useAtomValue(currentPageAtom);

  const start = (currentPage - 1) * perPageCount;
  const end = start + perPageCount;

  const countriesForPage = countries.slice(start, end);

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      {countryCount > 0 && (
        <div className="p-2 md:p-4 text-gray-700 text-sm font-medium text-center flex items-center justify-between">
          <div className="text-left">
            Showing <strong>{start + 1}</strong> -{" "}
            <strong>{Math.min(end, countries.length)}</strong> of{" "}
            <strong>{countryCount}</strong> countries found!
          </div>

          <PageSizeSelector />
        </div>
      )}

      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={["code", "name", "capital", "currency"]} />

        <tbody className="bg-white divide-y divide-gray-200">
          {countriesForPage.map(({ code, name, emoji, capital, currency }) => (
            <tr key={code}>
              <TableCell>{code}</TableCell>
              <TableCell>
                {name} {emoji}
              </TableCell>
              <TableCell>{capital}</TableCell>
              <TableCell>{currency}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
      {countries.length === 0 && (
        <div className="text-gray-500 text-center py-6">
          <p className="text-lg font-semibold">No countries found</p>
          <p className="text-sm">Try adjusting your filters!</p>
        </div>
      )}
      <Pagination totalPages={Math.ceil(countries.length / perPageCount)} />
    </div>
  );
};
