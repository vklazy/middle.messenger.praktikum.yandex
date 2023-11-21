interface profileInputAttributes {
  class: string;
}

export type profileInputProps = {
  attributes: profileInputAttributes;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  validator?: any;
  feedback?: string;
};
