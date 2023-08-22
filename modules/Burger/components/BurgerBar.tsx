import React from "react";

interface BurgerBarProps {
  isActive: boolean;
}

const BurgerBar = ({ isActive }: BurgerBarProps) => {
  const spanClassname = isActive
    ? "absolute top-0 right-0 w-full h-[4px] rounded-lg bg-stone-700 dark:bg-zinc-300 transition-all [&:nth-child(1)]:opacity-0 [&:nth-child(2)]:top-2 [&:nth-child(2)]:rotate-45 [&:nth-child(3)]:-rotate-45 [&:nth-child(3)]:top-2"
    : "absolute top-0 right-0 w-full h-[4px] rounded-lg bg-stone-700 dark:bg-zinc-300 transition-all [&:nth-child(2)]:top-2 [&:nth-child(3)]:top-4";
  return <span className={spanClassname}></span>;
};

export default BurgerBar;
