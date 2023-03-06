import React from "react";

interface ButtonProps {
  text: string;
  disabled: boolean;
}

const FormButton = ({ text, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="mt-4 py-2 w-full rounded-md bg-indigo-500 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50"
    >
      {text}
    </button>
  );
};

export default FormButton;
