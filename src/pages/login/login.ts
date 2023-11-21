import { Block } from '../../utils/block';
import { tpl } from './login.tpl.ts';
import { loginProps } from './types.ts';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { validateForm } from '../../utils/validation/validateData.ts';
import * as validations from '../../utils/validation/validations.ts';
import './login.scss';

export default class LoginCompiler extends Block<loginProps> {
  constructor(props: loginProps) {
    super(props, 'div');
  }

  init() {
    this._children.inputLogin = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'login',
      placeholder: 'Логин',
      value: '',
      validator: validations.checkLogin,
      feedback: `
Должен быть от 3 до 20 символов, латиница, может содержать цифры,
но не состоять из них, без пробелов, без спецсимволов (допустимы
дефис и нижнее подчёркивание)`,
    });

    this._children.inputPassword = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      value: '',
      validator: validations.checkPassword,
      feedback: `Должен быть от 8 до 40 символов, обязательно хотя бы
одна заглавная буква и цифра`,
    });

    this._children.buttonLogin = new Button({
      attributes: {
        class: 'button button-blue button-text-white',
        type: 'submit',
      },
      buttonLabel: 'Вход',
    });

    this._children.buttonSignUp = new Button({
      attributes: {
        class: 'button button-white button-text-blue',
        type: 'button',
      },
      buttonLabel: 'Нет аккаунта?',
    });
  }

  render() {
    return this.compile(tpl, this._props);
  }

  _addListeners() {
    const form = this.getContent()!.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        const fieldsToCheck = ['login', 'password'];
        validateForm(event, fieldsToCheck);
      });
    }
  }
}
