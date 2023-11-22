import { Block } from '../../../utils/block';
import { tpl } from './changePassword.tpl.ts';
import { profileChangePasswordProps } from './types.ts';
import { ProfileInput } from '../../../components/profile/input';
import { Button } from '../../../components/button';
import { validateInput } from '../../../utils/validation/validateData.ts';
import * as validations from '../../../utils/validation/validations.ts';

export default class ProfileChangePasswordCompiler extends Block<profileChangePasswordProps> {
  constructor(props: profileChangePasswordProps) {
    super(props, 'div');
  }

  init() {
    this._children.profileInputOldPassword = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkPassword);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Старый пароль',
      type: 'password',
      name: 'old_password',
      placeholder: 'Старый пароль',
      value: '123123',
      feedback: 'Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this._children.profileInputNewPassword = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkPassword);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Новый пароль',
      type: 'password',
      name: 'new_password',
      placeholder: 'Новый пароль',
      value: '123123123',
      feedback: 'Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this._children.profileInputConfirmNewPassword = new ProfileInput({
      events: {
        blur: (event: Event) => {
          validateInput(event, validations.checkPassword);
        }
      },
      attributes: {
        class: 'profile-input-field',
      },
      label: 'Повторите новый пароль',
      type: 'password',
      name: 'confirm_new_password',
      placeholder: 'Повторите новый пароль',
      value: '123123123',
      feedback: 'Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
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
        this._element?.querySelector('.form-change-password')?.
        addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _removeEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-change-password')?.
        removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
