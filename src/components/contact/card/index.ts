import { Block  } from '../../../utils/block';
import { tpl } from './card.tpl.ts';
import { contactCardProps } from './types.ts';
import './card.scss';

export class ContactCard extends Block<contactCardProps> {
  constructor(props: contactCardProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
