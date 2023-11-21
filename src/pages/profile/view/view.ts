import { Block } from '../../../utils/block';
import { tpl } from './view.tpl.ts';
import { profileViewProps } from './types.ts';
import { ProfileField } from '../../../components/profile/field';
import { ProfileLink } from '../../../components/profile/link';
import './view.scss';

export default class ProfileViewCompiler extends Block<profileViewProps> {
  constructor(props: profileViewProps) {
    super(props, 'div');
  }

  init() {
    this._children.profileFieldEmail = new ProfileField({
      attributes: {
        class: 'text-field',
      },
      label: 'Почта',
      value: 'pochta@yandex.ru',
    });

    this._children.profileFieldLogin = new ProfileField({
      attributes: {
        class: 'text-field',
      },
      label: 'Логин',
      value: 'ivanivanov',
    });

    this._children.profileFieldFirstName = new ProfileField({
      attributes: {
        class: 'text-field',
      },
      label: 'Имя',
      value: 'Иван',
    });

    this._children.profileFieldSecondName = new ProfileField({
      attributes: {
        class: 'text-field',
      },
      label: 'Фамилия',
      value: 'Иванов',
    });

    this._children.profileFieldDisplayName = new ProfileField({
      attributes: {
        class: 'text-field',
      },
      label: 'Имя в чате',
      value: 'Иван',
    });

    this._children.profileFieldPhone = new ProfileField({
      attributes: {
        class: 'text-field',
      },
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
    });

    this._children.profileLinkEdit = new ProfileLink({
      attributes: {
        class: 'profile-button border-b',
      },
      src: '/profile_edit',
      link: 'Изменить данные',
      color: 'blue',
    });

    this._children.profileLinkChangePassword = new ProfileLink({
      attributes: {
        class: 'profile-button border-b',
      },
      src: '/change_password',
      link: 'Изменить пароль',
      color: 'blue',
    });

    this._children.profileLinkExit = new ProfileLink({
      attributes: {
        class: 'profile-button',
      },
      src: '/chat',
      link: 'Выход',
      color: 'red',
    });
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
