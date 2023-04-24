import { FC } from "react";
import cl from "./style.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  outlined?: boolean;
}

const IconButton: FC<IProps> = ({
  icon,
  outlined,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`${cl.iconButton} ${outlined ? cl.outlined : ""} ${className}`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};

export default IconButton;
