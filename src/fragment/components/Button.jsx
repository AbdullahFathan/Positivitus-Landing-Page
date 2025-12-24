import React from "react";

const Button = ({
  children,
  text,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300";

  const variants = {
    primary: "bg-primary text-dark hover:bg-opacity-90",
    secondary: "bg-dark text-white hover:bg-opacity-90",
    outline:
      "border border-dark bg-transparent text-dark hover:bg-dark hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {text || children}
    </button>
  );
};

export default Button;
