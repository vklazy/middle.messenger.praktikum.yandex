interface profileInputAttributes {
  class: string;
}

export type profileInputProps = {
  events: object;
  attributes: profileInputAttributes;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  feedback?: string;
};
