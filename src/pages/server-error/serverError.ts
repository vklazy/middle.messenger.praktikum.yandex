import { ErrorMessage } from '../../components/error-message';
import { Block } from '../../utils/block';
import { errorParams } from './types.ts';
import { tpl } from './serverError.tpl.ts';

export class ServerErrorCompiler extends Block<errorParams> {
  init() {
    this._children.errorMessage = new ErrorMessage({
      errorNumber: this._props.statusCode,
      errorDescription: this._props.comment,
    });
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
