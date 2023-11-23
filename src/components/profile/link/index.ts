import { Block } from '../../../utils/block';
import { tpl } from './link.tpl.ts';
import { profileLinkProps } from './types.ts';
import './link.scss';

export class ProfileLink extends Block<profileLinkProps> {
  constructor(props: profileLinkProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
