import { METHODS, Data, Options, HTTPMethod } from './types.ts';

const queryStringify = (data: Data) => {
  return data
    ? Object.entries(data).reduce(
      (acc, curr, idx) =>
        acc +
        `${curr[0]}=${curr[1]}` +
        (idx === Object.entries(data).length - 1 ? '' : '&'),
      '?',
    )
    : '';
};

export class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => {
    const { data } = options;
    const formattedData = queryStringify(data);

    return this.request(
      url + formattedData,
      { ...options, method: METHODS.GET },
      options.timeout as number,
    );
  };

  put: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: Options, timeout: number = 5000) => {
    const { method = METHODS.GET, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.timeout = timeout;

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
