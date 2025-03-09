export const TableHeader = ({ columns }: { columns: string[] }) => (
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
