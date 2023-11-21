interface dialogMessageAttributes {
  class: string;
}

export type dialogMessageProps = {
  attributes: dialogMessageAttributes;
  directionFrom: boolean;
  message: string;
  date: string;
};
