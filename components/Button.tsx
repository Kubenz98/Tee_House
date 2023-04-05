import React from "react";
import { motion } from "framer-motion";
import { buttonVariants, itemVariants } from "@/lib/framerVariants";

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
    "rounded-md bg-indigo-500 text-white transition-colors disabled:opacity-50 " +
    className;

  return itemVariant ? (
    <motion.button
      variants={buttonVariants}
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
