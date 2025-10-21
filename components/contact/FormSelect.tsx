interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
}

export function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  options,
  placeholder,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}{" "}
        <span className="text-muted-foreground text-xs">(Optional)</span>
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
