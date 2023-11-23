export type TCheckFunction = (value: string) => boolean;
export const checkFirstName = (value: string): boolean => {
  const regex = /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/;
  return regex.test(value);
};

export const checkSecondName = (value: string): boolean => {
  const regex = /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/;
  return regex.test(value);
};

export const checkLogin = (value: string): boolean => {
  const regex = /^[A-Za-z0-9_-]{3,20}$/;
  return regex.test(value);
};

export const checkEmail = (value: string): boolean => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return regex.test(value);
};

export const checkPassword = (value: string): boolean => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
  return regex.test(value);
};

export const checkPhone = (value: string): boolean => {
  const regex = /^\+?\d{10,15}$/;
  return regex.test(value);
};

export const checkMessage = (value: string): boolean => value.trim() !== '';

export const checkConfirmPassword = (
  password: string,
  confirmPassword: string,
): boolean => password === confirmPassword;
