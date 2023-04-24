import cl from "./IconInput.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  error?: boolean;
}

const IconInput = ({ icon, error, className, ...rest }: IProps) => {
  return (
    <div
      className={`${cl.iconInputWrapper} ${className} ${error ? cl.error : ""}`}
    >
      <div className={cl.iconContainer}>{icon}</div>
      <input {...rest} />
    </div>
  );
};

export default IconInput;
