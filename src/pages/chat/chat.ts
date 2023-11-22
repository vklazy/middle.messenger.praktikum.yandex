import { Block } from '../../utils/block';
import { tpl } from './chat.tpl.ts';
import { chatProps } from './types.ts';
import { ContactCard } from '../../components/contact/card';
import { DialogMessage } from '../../components/dialog/message';
import './chat.scss';

export default class ChatCompiler extends Block<chatProps> {
  constructor(props: chatProps) {
    super(props, 'div');
  }

  init() {
    this._children.contactCard_0 = new ContactCard({
      attributes: {
        class: 'contact-card',
      },
      name: 'Андрей',
      message: 'Друзья, у меня для вас особенный выпуск новостей!...',
      date: '12:10',
      new_message: '2',
    });

    this._children.contactCard_1 = new ContactCard({
      attributes: {
        class: 'contact-card',
      },
      name: '1, 2, 3',
      message: 'Миллионы россиян ежедневно проводят десятки часов свое...',
      date: 'Пн',
      new_message: '4',
    });

    this._children.dialogMessage_0 = new DialogMessage({
      attributes: {
        class: 'dialog-message',
      },
      directionFrom: true,
      message: `
Привет! Смотри, тут всплыл интересный кусок лунной космической истории —
НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для
полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью
500 EL — и к слову говоря, все тушки этих камер все еще находятся на 
поверхности Луны, так как астронавты с собой забрали только кассеты
с пленкой.`,
      date: '11:56',
    });

    this._children.dialogMessage_1 = new DialogMessage({
      attributes: {
        class: 'dialog-message',
      },
      directionFrom: true,
      message: `
Хассельблад в итоге адаптировал SWC для космоса,но что-то пошло не так и на
ракету они так никогда и не попали. Всего их было произведено 25 штук, одну
из них недавно продали на аукционе за 45000 евро.`,
      date: '11:57',
    });

    this._children.dialogMessage_2 = new DialogMessage({
      attributes: {
        class: 'dialog-message',
      },
      directionFrom: false,
      message: 'Круто!',
      date: '12:00',
    });
  }

  _addEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-send-message')?.
          addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _removeEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('.form-send-message')?.
          removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
