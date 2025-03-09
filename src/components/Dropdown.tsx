import { useAtom, WritableAtom } from "jotai";
import { ChangeEvent } from "react";

type Options = {
  label: string;
  value: string;
  key?: string;
};

type DropdownProps = {
  id: string;
  options: Options[];
  defaultValue: string;
  defaultLabel: string;
  atom: WritableAtom<string, [string], void>;
};

export const Dropdown = ({
  id,
  options,
  defaultValue,
  defaultLabel,
  atom,
}: DropdownProps) => {
  const [currentValue, setCurrentValue] = useAtom(atom);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as string;
    setCurrentValue(newValue);
  };
  return (
    <div className="w-3/4 text-sm text-gray-700">
      <select
        id={id}
        className="w-full p-4 rounded-md border-gray-300 shadow-sm"
        onChange={handleChange}
        value={currentValue as string}
      >
        <option value={defaultValue}>{defaultLabel}</option>
        {options.map(({ label, value, key }, index) => (
          <option key={key ?? index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
