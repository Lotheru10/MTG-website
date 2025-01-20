type ButtonProps = {
  onClick: () => void;
};

function Button1({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Dodaj do talii</button>;
}
export default Button1;
