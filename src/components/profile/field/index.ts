import { Block } from '../../../utils/block';
import { tpl } from './field.tpl.ts';
import { profileFieldProps } from './types.ts';
import './field.scss';

export class ProfileField extends Block<profileFieldProps> {
  constructor(props: profileFieldProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
