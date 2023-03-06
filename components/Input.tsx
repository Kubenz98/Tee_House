import React from "react";

interface InputProps {
  type: string;
  value: React.RefObject<HTMLInputElement>;
}

const Input = ({ type, value }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={type}>{type}</label>
      <input type={type} id={type} ref={value} required className="px-2 py-1 bg-indigo-100 border border-indigo-300 rounded sm:py-2"/>
    </div>
  );
};

export default Input;
