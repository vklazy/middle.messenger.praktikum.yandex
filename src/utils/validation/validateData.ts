import {
  checkEmail,
  checkPassword,
  checkPhone,
  checkMessage,
  checkLogin,
  checkFirstName,
  checkSecondName,
} from './validations.ts';

interface FormData {
  firstName?: string;
  secondName?: string;
  displayName?: string;
  login?: string;
  email?: string;
  password?: string;
  phone?: string;
  message?: string;
  confirmPassword?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

export const validateForm = (event: Event, fieldsToCheck: string[]) => {
  event.preventDefault();

  const formData: FormData = {};
  const invalidFields: string[] = [];

  fieldsToCheck.forEach((field) => {
    switch (field) {
      case 'first_name':
        const firstNameInput = document.getElementsByName('first_name')[0] as HTMLInputElement;
        if (checkFirstName(firstNameInput.value)) {
          formData.firstName = firstNameInput.value;
        } else {
          invalidFields.push('first_name');
        }
        break;

      case 'second_name':
        const secondNameInput = document.getElementsByName('second_name')[0] as HTMLInputElement;
        if (checkSecondName(secondNameInput.value)) {
          formData.secondName = secondNameInput.value;
        } else {
          invalidFields.push('second_name');
        }
        break;

      case 'display_name':
        const displayNameInput = document.getElementsByName('display_name')[0] as HTMLInputElement;
        if (checkSecondName(displayNameInput.value)) {
          formData.displayName = displayNameInput.value;
        } else {
          invalidFields.push('display_name');
        }
        break;

      case 'login':
        const loginInput = document.getElementsByName('login')[0] as HTMLInputElement;
        if (checkLogin(loginInput.value)) {
          formData.login = loginInput.value;
        } else {
          invalidFields.push('login');
        }
        break;

      case 'email':
        const emailInput = document.getElementsByName('email')[0] as HTMLInputElement;
        if (checkEmail(emailInput.value)) {
          formData.email = emailInput.value;
        } else {
          invalidFields.push('email');
        }
        break;

      case 'password':
        const passwordInput = document.getElementsByName('password')[0] as HTMLInputElement;
        if (checkPassword(passwordInput.value)) {
          formData.password = passwordInput.value;
        } else {
          invalidFields.push('password');
        }
        break;

      case 'new_password':
        const newPasswordInput = document.getElementsByName('new_password')[0] as HTMLInputElement;
        if (checkPassword(newPasswordInput.value)) {
          formData.newPassword = newPasswordInput.value;
        } else {
          invalidFields.push('new_password');
        }
        break;

      case 'confirm_password': {
        const passwordInput = document.getElementsByName(
          'password'
        )[0] as HTMLInputElement;
        const confirmPasswordInput = document.getElementsByName(
          'confirm_password'
        )[0] as HTMLInputElement;
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;
        if (confirmPasswordValue === passwordValue) {
          formData.confirmPassword = confirmPasswordValue;
        } else {
          invalidFields.push('confirm_password');
        }
        break;
      }
      case 'confirm_new_password': {
        const newPasswordInput = document.getElementsByName(
          'new_password',
        )[0] as HTMLInputElement;
        const confirmNewPasswordInput = document.getElementsByName(
          'confirm_new_password',
        )[0] as HTMLInputElement;
        const newPasswordValue = newPasswordInput.value;
        const confirmNewPasswordValue = confirmNewPasswordInput.value;
        if (confirmNewPasswordValue === newPasswordValue) {
          formData.confirmNewPassword = confirmNewPasswordValue;
        } else {
          invalidFields.push('confirm_new_password');
        }
        break;
      }
      case 'phone':
        const phoneInput = document.getElementsByName('phone')[0] as HTMLInputElement;
        if (checkPhone(phoneInput.value)) {
          formData.phone = phoneInput.value;
        } else {
          invalidFields.push('phone');
        }
        break;

      case 'message':
        const messageInput = document.getElementsByName('message')[0] as HTMLInputElement;
        if (checkMessage(messageInput.value)) {
          formData.message = messageInput.value;
        } else {
          invalidFields.push('message');
        }
        break;

      default:
        console.error('Invalid field specified for validation');
    }
  });


  if (invalidFields.length === 0) {
    console.log(formData);
  }
};
