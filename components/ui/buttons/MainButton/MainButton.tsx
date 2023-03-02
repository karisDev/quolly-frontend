import cl from "./MainButton.module.scss";

interface IProps {
  children?: React.ReactNode;
  accent?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const MainButton = ({
  children,
  accent,
  className,
  disabled,
  onClick,
  type = "button",
}: IProps) => {
  return (
    <button
      className={`${cl.mainButton} ${accent ? cl.accent : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default MainButton;
