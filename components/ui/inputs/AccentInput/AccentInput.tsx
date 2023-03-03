import cl from "./AccentInput.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  placeholder?: string;
  type?: string;
  className?: string;
  error?: boolean;
  name?: string;
}

const AccentInput = ({
  icon,
  placeholder,
  type,
  className,
  error,
  name,
  ...props
}: IProps) => {
  return (
    <div
      className={`${cl.iconInputWrapper} ${className} ${error ? cl.error : ""}`}
    >
      <div className={cl.iconContainer}>{icon}</div>
      <input name={name} placeholder={placeholder} type={type} {...props} />
    </div>
  );
};

export default AccentInput;
