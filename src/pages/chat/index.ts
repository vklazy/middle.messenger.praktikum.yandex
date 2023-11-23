import ChatCompiler from './chat.ts';
import { validateForm } from '../../utils/validation/validateData.ts';

export const Chat = new ChatCompiler({
  events: {
    submit: (event: Event) => {
      const fieldsToCheck = ['message'];
      validateForm(event, fieldsToCheck);
    }
  },
  attributes: {
    class: 'chat-page',
  },
});
