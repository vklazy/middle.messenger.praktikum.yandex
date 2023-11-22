import { Block } from '../../utils/block';
import { tpl } from './signup.tpl.ts';
import { signupProps } from './types.ts';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import * as validations from '../../utils/validation/validations.ts';
import { validateInput } from '../../utils/validation/validateData.ts';
import './signup.scss';

export default class SignupCompiler extends Block<signupProps> {
  constructor(props: signupProps) {
    super(props, 'div');
  }

  init() {
    this._children.inputEmail = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkEmail);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'email',
      placeholder: 'Почта',
      value: '',
      feedback: 'Неверный адрес e-mail',
    });

    this._children.inputLogin = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkLogin);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'login',
      placeholder: 'Логин',
      value: '',
      feedback: `
Должен быть от 3 до 20 символов, латиница, может содержать цифры,
но не состоять из них, без пробелов, без спецсимволов (допустимы
дефис и нижнее подчёркивание)`,
    });

    this._children.inputFirstName = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkFirstName);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'first_name',
      placeholder: 'Имя',
      value: '',
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.inputSecondName = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkSecondName);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'second_name',
      placeholder: 'Фамилия',
      value: '',
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.inputPhone = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkPhone);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'phone',
      placeholder: 'Телефон',
      value: '',
      feedback: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
    });

    this._children.inputPassword = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkPassword);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      value: '',
      feedback: 'Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this._children.inputConfirmPassword = new Input({
      events: {
        blur: (event: FocusEvent) => {
          validateInput(event, validations.checkPassword);
        }
      },
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'password',
      name: 'confirm_password',
      placeholder: 'Пароль (еще раз)',
      value: '',
      feedback: 'Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this._children.buttonSignUp = new Button({
      attributes: {
        class: 'button button-blue button-text-white',
        type: 'submit',
      },
      buttonLabel: 'Зарегистрироваться',
    });

    this._children.buttonLogin = new Button({
      attributes: {
        class: 'button button-white button-text-blue',
        type: 'button',
      },
      buttonLabel: 'Войти',
    });
  }

  _addEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-signup')?.
        addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _removeEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-signup')?.
        removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
