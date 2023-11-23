import LoginCompiler from './login.ts';
import { validateForm } from '../../utils/validation/validateData.ts';

export const Login = new LoginCompiler({
  title: 'Вход',
  events: {
    submit: (event: Event) => {
      const fieldsToCheck = ['login', 'password'];
      validateForm(event, fieldsToCheck);
    }
  },
  attributes: {
    class: 'login-page',
  },
});
