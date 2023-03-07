interface SignupData {
  email: string;
  username: string;
  password: string;
  passwordRepeat: string;
}
interface SignupValidation {
  formIsValid: boolean;
  error: null | string;
}

export const emailValidation = (email: string) => {
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return email.match(validRegex) ? true : false;
};

export const passwordValidation = (data: string) =>
  data.length >= 6 ? true : false;

export const equalPasswords = (pwd1: string, pwd2: string) =>
  pwd1 === pwd2 ? true : false;

const usernameLengthValidation = (username: string) =>
  username.trim().length === 0 ? false : true;

const formValidation = (data: SignupData) => {
  let validationData: SignupValidation = {
    formIsValid: false,
    error: null,
  };

  const email = emailValidation(data.email);
  const pwd = passwordValidation(data.password);
  const equalPwd = equalPasswords(data.password, data.passwordRepeat);
  const usernameLength = usernameLengthValidation(data.username);

  if (!email) {
    validationData.error = "Invalid email";
  } else if (!pwd) {
    validationData.error = "Password must have at least 6 characters";
  } else if (!equalPwd) {
    validationData.error = "Passwords are not the same";
  } else if (!usernameLength) {
    validationData.error = "Username is too short";
  }

  if (email && pwd && equalPwd && usernameLength) {
    validationData.formIsValid = true;
  } else validationData.formIsValid = false;

  return validationData;
};

export default formValidation;
