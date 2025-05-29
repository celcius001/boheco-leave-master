import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function FormSelect({
  label,
  name,
  slabel,
  select,
  onChange,
}: {
  label: string;
  name: string;
  slabel: string;
  select: string[];
  onChange?: (name: string, value: string) => void;
}) {
  return (
    <div className="flex max-w-sm items-center gap-2 p-2">
      <div className="flex w-full max-w-sm flex-col items-center gap-2 space-x-2 md:flex-row">
        <Label className="w-32">{label}</Label>
        <Select onValueChange={(value) => onChange && onChange(name, value)}>
          <SelectTrigger className="flex-1 rounded bg-white px-4 py-2 dark:text-black">
            <SelectValue placeholder={slabel} />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>{slabel}</SelectLabel>
              {select.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default FormSelect;
