import cl from "./MainButton.module.scss";

interface IProps {
  children: React.ReactNode;
  accent?: boolean;
}

const MainButton = ({ children, accent }: IProps) => {
  return (
    <button className={`${cl.mainButton} ${accent ? cl.accent : ""}`}>
      {children}
    </button>
  );
};

export default MainButton;
