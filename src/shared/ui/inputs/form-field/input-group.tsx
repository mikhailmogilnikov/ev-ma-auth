import { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
  label: string;
  id: string;
  error?: string;
  hideLabel?: boolean;
}

export function FormField(props: FormFieldProps) {
  const { children, label, id, error, hideLabel } = props;

  return (
    <div className="flex flex-col gap-2">
      <label className={hideLabel ? "sr-only" : ""} htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
