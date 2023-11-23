import { Block } from './utils/block';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Chat } from './pages/chat';
import { ProfileView } from './pages/profile/view';
import { ProfileEdit } from './pages/profile/edit';
import { ProfileChangePassword } from './pages/profile/change_password';
import { NotFound } from './pages/not-found';
import { ServerError } from './pages/server-error';
import './assets/stylesheets/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const path = window.location.pathname;
  const getPage = () => {
    switch (path) {
      case '/':
        return Login;
      case '/login':
        return Login;
      case '/signup':
        return Signup;
      case '/chat':
        return Chat;
      case '/profile_view':
        return ProfileView;
      case '/profile_edit':
        return ProfileEdit;
      case '/change_password':
        return ProfileChangePassword;
      case '/404':
        return NotFound;
      case '/500':
        return ServerError;
      default:
        return NotFound;
    }
  };

  const page: Block<Record<string, unknown>> = getPage();
  root.append(page.element as HTMLElement);
  page.dispatchComponentDidMount();
});
