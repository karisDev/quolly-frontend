import cl from "./IconInput.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  name?: string;
}

const IconInput = ({
  icon,
  placeholder,
  type,
  onChange,
  className,
  error,
  name,
  ...props
}: IProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div
      className={`${cl.iconInputWrapper} ${className} ${error ? cl.error : ""}`}
    >
      <div className={cl.iconContainer}>{icon}</div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
};

export default IconInput;
