import { useState } from "react";

const useCheckoutInput = (validate: (value: string) => boolean) => {
  const [value, setValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changedIsTouched = () => {
    setIsTouched(true);
  };

  let isValid = validate(value);

  return {
    value,
    changeValue,
    isTouched,
    changedIsTouched,
    isValid,
  };
};

export default useCheckoutInput;
