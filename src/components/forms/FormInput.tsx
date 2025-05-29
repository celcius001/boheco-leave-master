import { Input } from "../ui/input";
import { Label } from "../ui/label";

function FormInput({
  label,
  type,
  name,
  placeholder,
  onChange,
  disabled,
  value,
}: {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (name: string, value: string) => void;
  disabled: boolean;
  value?: string | number;
}) {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 space-x-2 p-2">
      <div className="flex w-full max-w-sm flex-col items-center gap-2 space-x-2 md:flex-row">
        <Label htmlFor={label} className="w-32">
          {label}
        </Label>
        <Input
          className="flex-1 rounded bg-white px-4 py-2 dark:text-black"
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(name, e.target.value)}
          disabled={disabled}
          value={value}
          required
        />
      </div>
    </div>
  );
}

export default FormInput;
