import { GetCountriesQuery } from "../__generated__/graphql";

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
  error,
}: {
  countries: GetCountriesQuery["countries"];
  error?: string;
}) => {
  console.log({ error });
  //   const page = useReactiveVar(pageVar);
  //   const pageSize = useReactiveVar(pageSizeVar);
  //   const start = (page - 1) * pageSize;
  //   const end = start + pageSize;

  //   const countriesToDisplay = countries.slice(start, end);
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-2">{error}</span>
        </div>
      )}

      {/* No Results Found */}
      {countries.length === 0 && !error && (
        <div className="text-gray-500 text-center py-6">
          <p className="text-lg font-semibold">No results found</p>
          <p className="text-sm">Try adjusting your search or filters.</p>
        </div>
      )}
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={["code", "name", "capital", "currency"]} />
        <tbody className="bg-white divide-y divide-gray-200">
          {countries.map(({ code, name, emoji, capital, currency }) => (
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
    </div>
  );
};
