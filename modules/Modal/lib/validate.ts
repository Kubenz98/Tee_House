export const stringValidate = (value: string): boolean => {
  if (value.length >= 3) return true;
  else return false;
};

export const postalCodeValidate = (value: string): boolean => {
  const regex = /^\d{2}-\d{3}$/;
  return regex.test(value);
};
