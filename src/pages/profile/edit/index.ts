import ProfileEditCompiler from './edit.ts';
import { validateForm } from '../../../utils/validation/validateData.ts';

export const ProfileEdit = new ProfileEditCompiler({
  title: 'Профиль',
  events: {
    submit: (event: Event) => {
      const fieldsToCheck = [
        'email',
        'login',
        'first_name',
        'second_name',
        'display_name',
        'phone',
      ];
      validateForm(event, fieldsToCheck);
    }
  },
  attributes: {
    class: 'profile-page',
  },
});
