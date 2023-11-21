import { Block } from '../../utils/block';
import { tpl } from './errorMessage.tpl.ts';
import { errorMessageProps } from './types.ts';
import './errors.scss';

export class ErrorMessage extends Block<errorMessageProps> {
  render() {
    return this.compile(tpl, this._props);
  }
}
