import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '' }) => {
  const baseClasses = 'py-[24px] px-[18px] lg:px-[32px] rounded-[20px] font-medium text-[18px] sm:text-[24px] lg:w-auto w-[33%] flex items-center justify-center';
  const variantClasses = variant === 'primary' ? 'bg-[#F7C454] text-gray-800' : 'bg-blue-50 text-gray-800';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;