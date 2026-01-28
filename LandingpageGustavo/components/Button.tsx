import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1";

  const variants = {
    primary: "bg-brand-purple text-white hover:bg-purple-500 shadow-[0_0_20px_rgba(176,38,255,0.3)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};