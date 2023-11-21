import { Block } from '../../../utils/block';
import { tpl } from './edit.tpl.ts';
import { profileEditProps } from './types.ts';
import { ProfileInput } from '../../../components/profile/input';
import { Button } from '../../../components/button';
import { validateForm } from '../../../utils/validation/validateData.ts';
import * as validations from '../../../utils/validation/validations.ts';
import './edit.scss';

export default class ProfileEditCompiler extends Block<profileEditProps> {
  constructor(props: profileEditProps) {
    super(props, 'div');
  }

  init() {
    this._children.profileInputEmail = new ProfileInput({
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Почта',
      type: 'email',
      name: 'email',
      placeholder: 'почта',
      value: 'pochta@yandex.ru',
      validator: validations.checkEmail,
      feedback: 'Неверный адрес e-mail',
    });

    this._children.profileInputLogin = new ProfileInput({
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Логин',
      type: 'text',
      name: 'login',
      placeholder: 'логин',
      value: 'ivanivanov',
      validator: validations.checkLogin,
      feedback: `
Должен быть от 3 до 20 символов, латиница, может содержать цифры,
но не состоять из них, без пробелов, без спецсимволов (допустимы
дефис и нижнее подчёркивание)`,
    });

    this._children.profileInputFirstName = new ProfileInput({
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      placeholder: 'имя',
      value: 'Иван',
      validator: validations.checkFirstName,
     feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.profileInputSecondName = new ProfileInput({
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      placeholder: 'фамилия',
      value: 'Иванов',
      validator: validations.checkSecondName,
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.profileInputDisplayName = new ProfileInput({
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Имя в чате',
      type: 'text',
      name: 'display_name',
      placeholder: 'имя в чате',
      value: 'Иван',
      validator: validations.checkFirstName,
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.profileInputPhone = new ProfileInput({
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Телефон',
      type: 'text',
      name: 'phone',
      placeholder: 'телефон',
      value: '+79099673030',
      validator: validations.checkPhone,
      feedback: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
    });

    this._children.buttonSave = new Button({
      attributes: {
        class: 'button button-blue button-text-white',
        type: 'submit',
      },
      buttonLabel: 'Сохранить',
    });
  }

  render() {
    return this.compile(tpl, this._props);
  }

  _addListeners() {
    const form = this.getContent()!.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        const fieldsToCheck = [
          'email',
          'login',
          'first_name',
          'second_name',
          'display_name',
          'phone',
        ];
        validateForm(event, fieldsToCheck);
      });
    }
  }
}
