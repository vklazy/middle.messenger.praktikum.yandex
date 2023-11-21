interface contactCardAttributes {
  class: string;
}

export type contactCardProps = {
  attributes: contactCardAttributes;
  name: string;
  message: string;
  date: string;
  new_message: string;
};
