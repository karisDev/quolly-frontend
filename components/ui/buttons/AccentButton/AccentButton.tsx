import { FC } from "react";
import cl from "./AccentButton.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  outlined?: boolean;
}

const AccentButton: FC<IProps> = ({ children, icon, ...props }) => {
  return (
    <button
      className={`${cl.accentButton} ${props.outlined ? cl.outlined : ""}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default AccentButton;
