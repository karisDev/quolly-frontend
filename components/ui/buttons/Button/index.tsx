import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import cl from "./style.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: "default";
}

const Button = ({ className, variant = "default", ...rest }: IProps) => {
  return (
    <button
      className={`${cl.button} ${cl[variant]} ${className ?? ""}`}
      {...rest}
    />
  );
};

export default Button;
