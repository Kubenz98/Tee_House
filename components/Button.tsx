import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/framerMotion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  itemVariant?: boolean;
}

const Button = ({
  className,
  onClick,
  children,
  disabled,
  itemVariant,
}: ButtonProps) => {
  const classes =
    "rounded-md bg-indigo-500 text-white md:hover:bg-indigo-700 transition-colors disabled:bg-opacity-50 " +
    className;

  return itemVariant ? (
    <motion.button
      variants={itemVariants}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </motion.button>
  ) : (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
