interface inputAttributes {
  class: string;
}

export type inputProps = {
  attributes: inputAttributes;
  class: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  validator?: any;
  feedback?: string;
};
