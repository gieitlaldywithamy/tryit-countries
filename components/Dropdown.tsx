// import { ChangeEvent } from "react";

// type DropdownProps<T> = {
//     id: string;
//   value: T;
//   onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
//   options: T[];
// };

// export const Dropdown = <T>({ id, value, onChange }: DropdownProps<T>) => {
//     return (
//       <div className="text-gray-700">
//         <select
//           id="currencyFilter"
//           className="w-full p-4 rounded-md border-gray-300 shadow-sm"
//           onChange={onChange}
//           value={value}
//         >
//           //<option value="">Continent</option>
//           {options.map((option) => (
//             <option key={continent.code} value={continent.code}>
//               {continent.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
// }
