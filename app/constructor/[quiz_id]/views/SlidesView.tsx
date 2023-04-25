import cl from "../styles.module.scss";
import preview from "../assets/images/preview.png";
import Image from "next/image";

export const SlidesView = () => {
  return (
    <div className={cl.sideContainer}>
      <Image src={preview} alt="preview" />
    </div>
  );
};
