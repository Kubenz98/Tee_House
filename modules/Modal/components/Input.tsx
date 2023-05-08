interface InputProps {
  type: string;
  name: string;
  value: string;
  isValid: boolean;
  isTouched: boolean;
  placeholder?: string;
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurFn: () => void;
}

const Input = ({
  type,
  name,
  value,
  onChangeFn,
  isValid,
  onBlurFn,
  isTouched,
  placeholder,
}: InputProps) => {
  const words = name.split(" ");
  let joinedwords: string;
  if (words.length > 1) {
    joinedwords = words.join("-");
  }

  let inputClasses = `px-2 py-1 bg-indigo-100 border border-indigo-300 rounded dark:bg-indigo-700/50 dark:border-indigo-500 sm:py-2`;

  let labelClasses = "";

  if (!isValid && isTouched) {
    inputClasses = `px-2 py-1 bg-red-100 border border-red-300 rounded dark:bg-red-700/50 dark:border-red-500 sm:py-2`;
    labelClasses = "text-red-700 font-semibold";
  }
  return (
    <div className="flex flex-col mt-2">
      <label
        htmlFor={joinedwords! ? joinedwords : name}
        className={labelClasses}
      >
        {name}
      </label>
      <input
        type={type}
        id={joinedwords! ? joinedwords : name}
        required
        onChange={onChangeFn}
        onBlur={onBlurFn}
        value={value}
        className={inputClasses}
        placeholder={placeholder}
        minLength={3}
      />
    </div>
  );
};

export default Input;
