interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

export function FormInput({
  id,
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
