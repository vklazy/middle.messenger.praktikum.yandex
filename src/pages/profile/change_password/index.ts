import ProfileChangePasswordCompiler from './changePassword.ts';

export const ProfileChangePassword = new ProfileChangePasswordCompiler({
  title: 'Изменить пароль',
  attributes: {
    class: 'profile-page',
  },
});
