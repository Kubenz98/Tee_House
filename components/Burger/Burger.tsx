import React from "react";
import BurgerBar from "./BurgerBar";

interface BurgerProps {
  navState: boolean;
  navHandler: () => void;
}

const Burger = ({ navState, navHandler }: BurgerProps) => {
  return (
    <div
      className='flex items-center relative top-0 right-4 h-full transition desktop:hidden'
    >
      <div
        className="relative w-[30px] h-[20px] cursor-pointer"
        onClick={navHandler}
      >
        <BurgerBar isActive={navState} />
        <BurgerBar isActive={navState} />
        <BurgerBar isActive={navState} />
      </div>
    </div>
  );
};

export default Burger;
