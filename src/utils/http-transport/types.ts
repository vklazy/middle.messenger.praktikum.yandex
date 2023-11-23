export enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export type Data = Document | XMLHttpRequestBodyInit | null | undefined;

export type Options = {
  method?: METHODS;
  data?: Data;
  timeout?: number;
};

export type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;
