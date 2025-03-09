import { useAtomValue } from "jotai";
import { GetCountriesQuery } from "../../__generated__/graphql";
import { currentPageAtom, perPageAtom } from "../../lib/paginationAtoms";
import { PageSizeSelector } from "./Pagination/PageSizeSelector";
import { TableHeader } from "../../components/TableHeader";
import { TableCell } from "../../components/TableCell";
import { PrevNextControls } from "./Pagination/PrevNextControls";

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
      {/* //TOxDO ADD reset filters button */}
      {countries.length === 0 && (
        <div className="text-gray-500 text-center py-6">
          <p className="text-lg font-semibold">No countries found</p>
          <p className="text-sm">Try adjusting your filters!</p>
        </div>
      )}
      <PrevNextControls
        totalPages={Math.ceil(countries.length / perPageCount)}
      />
    </div>
  );
};
