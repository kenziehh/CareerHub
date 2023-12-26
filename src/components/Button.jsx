import React from 'react';

const Button = ({ children, variant = 'primary', size = 'default', className = '', ...rest }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'border-primaryBlue text-primaryBlue';
      case 'disabled':
        return 'border-0 text-primaryBlue bg-[#E3E9F7]';
      // Add more variants as needed
      default:
        return 'bg-primaryBlue text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-2 text-sm';
      case 'large':
        return 'px-6 py-4 text-lg';
      // Default is medium size
      default:
        return 'px-4 py-3';
    }
  };

  const baseStyles = 'flex items-center gap-2 font-medium border-2 rounded-xl transition-all duration-300 focus:outline-none flex-shrink-0';

  return (
    <button
      className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
