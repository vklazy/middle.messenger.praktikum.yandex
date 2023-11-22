interface inputAttributes {
  class: string;
}

export type inputProps = {
  events: object;
  attributes: inputAttributes;
  class: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  feedback?: string;
};
