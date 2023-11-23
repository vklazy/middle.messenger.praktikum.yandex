import ProfileChangePasswordCompiler from './changePassword.ts';
import { validateForm } from '../../../utils/validation/validateData.ts';

export const ProfileChangePassword = new ProfileChangePasswordCompiler({
  title: 'Изменить пароль',
  events: {
    submit: (event: Event) => {
      const fieldsToCheck = [
        'old_password',
        'new_password',
        'confirm_new_password',
      ];
      validateForm(event, fieldsToCheck);
    }
  },
  attributes: {
    class: 'profile-page',
  },
});
