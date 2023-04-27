import { FC } from "react";
import preview from "../assets/preview.png";
import Image from "next/image";
import cl from "../styles.module.scss";

interface SlidePreview {
  title: string;
  index: number;
  onClick: () => void;
}

const SlidePreview: FC<SlidePreview> = (p) => {
  return (
    <div className={cl.preview}>
      <p className={cl.previewTitle}>
        {p.index}. {p.title}
      </p>
      <div className={cl.previewImg}>
        <Image src={preview} alt="preview" />
      </div>
      <div className={cl.previewControls}>
        <button></button>
      </div>
    </div>
  );
};

export default SlidePreview;
