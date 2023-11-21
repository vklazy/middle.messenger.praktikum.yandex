import { NotFoundCompiler } from './notFound.ts';

export const NotFound = new NotFoundCompiler({
  statusCode: '404',
  comment: 'Не туда попали',
});
