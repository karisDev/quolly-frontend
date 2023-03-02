import cl from "./IconInput.module.scss";

interface IProps {
  icon: JSX.Element;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const IconInput = ({
  icon,
  placeholder,
  type,
  value,
  onChange,
  className,
  disabled,
}: IProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div
      className={`${cl.iconInputWrapper} ${className} ${
        disabled ? cl.disabled : ""
      }`}
    >
      <div className={cl.iconContainer}>{icon}</div>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default IconInput;
