//typescript for type safety


interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

export const Button = ({ children, color, onClick }: Props) => {
  return (
    <button className={" close btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
