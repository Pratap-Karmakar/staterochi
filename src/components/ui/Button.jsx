import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:to-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
