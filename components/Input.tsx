import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: React.RefObject<HTMLInputElement>;
}

const Input = ({ type, value, name }: InputProps) => {
  const words = name.split(" ");
  let joinedwords: string;
  if(words.length > 1) {
    joinedwords = words.join("-")
  }
  
  return (
    <div className="flex flex-col">
      <label htmlFor={joinedwords! ? joinedwords : name}>{name}</label>
      <input type={type} id={joinedwords! ? joinedwords : name} ref={value} required className="px-2 py-1 bg-indigo-100 border border-indigo-300 rounded dark:bg-indigo-700/50 dark:border-indigo-500 sm:py-2"/>
    </div>
  );
};

export default Input;
