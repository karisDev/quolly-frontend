import { FC } from "react";
import cl from "./AccentButton.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  outlined?: boolean;
}

const AccentButton: FC<IProps> = ({ children, icon, outlined, ...props }) => {
  return (
    <button
      className={`${cl.accentButton} ${outlined ? cl.outlined : ""}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default AccentButton;
