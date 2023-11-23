import { Block } from '../../../utils/block';
import { tpl } from './edit.tpl.ts';
import { profileEditProps } from './types.ts';
import { ProfileInput } from '../../../components/profile/input';
import { Button } from '../../../components/button';
import { validateInput } from '../../../utils/validation/validateData.ts';
import * as validations from '../../../utils/validation/validations.ts';
import './edit.scss';

export default class ProfileEditCompiler extends Block<profileEditProps> {
  constructor(props: profileEditProps) {
    super(props, 'div');
  }

  init() {
    this._children.profileInputEmail = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkEmail);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Почта',
      type: 'email',
      name: 'email',
      placeholder: 'почта',
      value: 'pochta@yandex.ru',
      feedback: 'Неверный адрес e-mail',
    });

    this._children.profileInputLogin = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkLogin);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Логин',
      type: 'text',
      name: 'login',
      placeholder: 'логин',
      value: 'ivanivanov',
      feedback: `
Должен быть от 3 до 20 символов, латиница, может содержать цифры,
но не состоять из них, без пробелов, без спецсимволов (допустимы
дефис и нижнее подчёркивание)`,
    });

    this._children.profileInputFirstName = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkFirstName);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      placeholder: 'имя',
      value: 'Иван',
     feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.profileInputSecondName = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkSecondName);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      placeholder: 'фамилия',
      value: 'Иванов',
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.profileInputDisplayName = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkFirstName);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Имя в чате',
      type: 'text',
      name: 'display_name',
      placeholder: 'имя в чате',
      value: 'Иван',
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.profileInputPhone = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkPhone);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Телефон',
      type: 'text',
      name: 'phone',
      placeholder: 'телефон',
      value: '+79099673030',
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

  _addEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-profile-edit')?.
          addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _removeEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-profile-edit')?.
          removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
