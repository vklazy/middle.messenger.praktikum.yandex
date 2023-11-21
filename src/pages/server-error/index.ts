import { ServerErrorCompiler } from './serverError.ts';

export const ServerError = new ServerErrorCompiler({
  statusCode: '500',
  comment: 'Мы уже фиксим',
});
