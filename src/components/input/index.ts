import { Block } from '../../utils/block';
import { tpl } from './input.tpl.ts';
import { inputProps } from './types.ts';
import './input.scss';

export class Input extends Block<inputProps> {
  constructor(props: inputProps) {
    super(props, 'div');
  }

  _addEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('input')?.addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _removeEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.querySelector('input')?.removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
