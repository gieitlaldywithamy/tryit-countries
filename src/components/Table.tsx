import { useAtomValue } from "jotai";
import { GetCountriesQuery } from "../__generated__/graphql";
import { perPageAtom } from "../lib/PaginationState";
import { PageSizeSelector } from "./PageSizeSelector";

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

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      {countryCount > 0 && (
        <div className="p-4 text-gray-700 text-sm font-medium text-center flex items-center justify-between">
          <span>
            {/* Showing <strong>{start + 1}</strong> - <strong>{end}</strong> of{" "} */}
            <strong>{countryCount}</strong> countries found!
          </span>

          <PageSizeSelector />
        </div>
      )}

      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={["code", "name", "capital", "currency"]} />

        <tbody className="bg-white divide-y divide-gray-200">
          {countries
            .slice(0, perPageCount)
            .map(({ code, name, emoji, capital, currency }) => (
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
    </div>
  );
};
