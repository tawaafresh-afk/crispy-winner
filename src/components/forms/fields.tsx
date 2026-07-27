import { cn } from "@/lib/utils";

const baseFieldClass =
  "w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-700">
      {children} {required ? <span className="text-maroon-500">*</span> : null}
    </label>
  );
}

export function TextField({
  id,
  label,
  required,
  className,
  ...props
}: { id: string; label: string; required?: boolean; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input id={id} name={id} required={required} className={baseFieldClass} {...props} />
    </div>
  );
}

export function TextareaField({
  id,
  label,
  required,
  className,
  rows = 4,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea id={id} name={id} required={required} rows={rows} className={cn(baseFieldClass, "resize-none")} {...props} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  required,
  className,
  options,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  className?: string;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select id={id} name={id} required={required} className={cn(baseFieldClass, "appearance-none")} {...props}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
