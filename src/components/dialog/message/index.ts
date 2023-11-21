import { Block  } from '../../../utils/block';
import { tpl } from './message.tpl.ts';
import { dialogMessageProps } from './types.ts';
import './message.scss';

export class DialogMessage extends Block<dialogMessageProps> {
  constructor(props: dialogMessageProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
