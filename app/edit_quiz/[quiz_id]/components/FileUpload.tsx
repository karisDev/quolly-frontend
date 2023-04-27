import cl from "../styles.module.scss";
import LandscapeSvg from "../assets/landscape.svg";

const FileUpload = () => {
  return (
    <div className={cl.fileUpload}>
      <LandscapeSvg />
      <h2>Вставить медиа</h2>
    </div>
  );
};

export default FileUpload;
