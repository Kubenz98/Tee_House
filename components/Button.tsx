import React from "react";

const Button = ({
  className,
  onClick,
  children,
  disabled,
}: React.HTMLProps<HTMLButtonElement>) => {
  
  const classes =
    "rounded-md bg-indigo-500 text-white md:hover:bg-indigo-700 transition-colors disabled:opacity-50 " +
    className;
  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
