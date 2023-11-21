import { Block } from '../../utils/block';
import { tpl } from './signup.tpl.ts';
import { signupProps } from './types.ts';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { validateForm } from '../../utils/validation/validateData.ts';
import * as validations from '../../utils/validation/validations.ts';
import './signup.scss';

export default class SignupCompiler extends Block<signupProps> {
  constructor(props: signupProps) {
    super(props, 'div');
  }

  init() {
    this._children.inputEmail = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'email',
      placeholder: 'Почта',
      value: '',
      validator: validations.checkEmail,
      feedback: 'Неверный адрес e-mail',
    });

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

    this._children.inputFirstName = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'first_name',
      placeholder: 'Имя',
      value: '',
      validator: validations.checkFirstName,
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.inputSecondName = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'second_name',
      placeholder: 'Фамилия',
      value: '',
      validator: validations.checkSecondName,
      feedback: `
Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр,
нет спецсимволов (допустим только дефис)`,
    });

    this._children.inputPhone = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'text',
      name: 'phone',
      placeholder: 'Телефон',
      value: '',
      validator: validations.checkPhone,
      feedback: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
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
      feedback: 'Должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    });

    this._children.inputConfirmPassword = new Input({
      attributes: {
        class: 'input-row',
      },
      class: 'input',
      type: 'password',
      name: 'confirm_password',
      placeholder: 'Пароль (еще раз)',
      value: '',
      validator: validations.checkPassword,
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
          'phone',
          'password',
          'confirm_password',
        ];
        validateForm(event, fieldsToCheck);
      });
    }
  }
}
