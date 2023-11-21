import { Block } from '../../utils/block';
import { tpl } from './input.tpl.ts';
import { inputProps } from './types.ts';
import './input.scss';

export class Input extends Block<inputProps> {
  constructor(props: inputProps) {
    super(props, 'div');
  }

  _addListeners() {
    if (this._props.validator) {
      const inputElement = this.element!.querySelector('input')! as HTMLInputElement;
      const feedbackElement = this.element!.querySelector('span')! as HTMLSpanElement;
      if (inputElement) {
        inputElement.addEventListener('blur', (event: Event) => {
          const target = event.target as HTMLInputElement;
          const { validator } = this._props;
          if (!validator(target!.value)) {
            feedbackElement.style.display = 'block';
          } else {
            feedbackElement.style.display = 'none';
          }
        });
      }
    }
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
