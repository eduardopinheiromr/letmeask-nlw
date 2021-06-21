type Props = {
  text?: string;
};

export const Button = (props: Props) => {
  return <button>{props.text || "Botão sem texto"}</button>;
};
