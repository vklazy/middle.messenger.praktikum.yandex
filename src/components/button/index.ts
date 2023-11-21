import { Block } from '../../utils/block';
import { tpl } from './button.tpl.ts';
import { buttonProps } from './types.ts';
import './button.scss';

export class Button extends Block<buttonProps> {
  constructor(props: buttonProps) {
    super(props, 'button');
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
