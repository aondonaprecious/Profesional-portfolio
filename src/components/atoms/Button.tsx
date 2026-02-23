/** @format */

// src/components/atoms/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  // Logic-based styling using Tailwind v4 variables
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[--color-brand-primary] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20",
    outline:
      "border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white",
    ghost: "bg-transparent hover:bg-gray-800 text-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
