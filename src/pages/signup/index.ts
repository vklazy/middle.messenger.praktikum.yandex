import SignupCompiler from './signup.ts';
import { validateForm } from '../../utils/validation/validateData.ts';

export const Signup = new SignupCompiler({
  title: 'Регистрация',
  events: {
    submit: (event: Event) => {
      const fieldsToCheck = [
        'email',
        'login',
        'first_name',
        'second_name',
        'phone',
        'password',
        'confirm_password',
      ];
      validateForm(event, fieldsToCheck);
    }
  },
  attributes: {
    class: 'signup-page',
  },
});
