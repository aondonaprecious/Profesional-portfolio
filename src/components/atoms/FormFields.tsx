/** @format */

// src/components/atoms/FormField.tsx
import React from "react";
import type { IconType } from "react-icons";

interface FormFieldProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string;
  icon: IconType;
  textarea?: boolean;
}

/**
 * ATOM: FormField
 * A reusable input/textarea with integrated iconography.
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  icon: Icon,
  textarea,
  ...props
}) => {
  const baseStyles =
    "w-full bg-gray-900/40 border border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-gray-300 focus:outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-600";

  return (
    <div className="flex flex-col gap-2 w-full group">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
        {textarea ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={`${baseStyles} min-h-[150px] resize-none`}
          />
        ) : (
          <input {...props} className={baseStyles} />
        )}
      </div>
    </div>
  );
};

export default FormField;
