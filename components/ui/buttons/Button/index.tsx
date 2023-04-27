import { ButtonHTMLAttributes, FC } from "react";
import cl from "./style.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: "default" | "small";
}

const Button: FC<IProps> = ({ className, variant = "default", ...rest }) => {
  return (
    <button
      className={`${cl.button} ${cl[variant]} ${className ?? ""}`}
      {...rest}
    />
  );
};

export default Button;
