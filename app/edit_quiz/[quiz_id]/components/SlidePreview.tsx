import { FC } from "react";
import preview from "../assets/preview.png";
import Image from "next/image";
import cl from "../styles.module.scss";
import CopySvg from "../assets/copy.svg";
import TrashSvg from "../assets/trash.svg";

interface SlidePreview {
  title: string;
  index: number;
  active: boolean;
  onClick: () => void;
  onDelete: () => void;
  onCopy: () => void;
}

const SlidePreview: FC<SlidePreview> = (p) => {
  return (
    <div
      className={`${cl.preview} ${p.active ? cl.active : ""}`}
      onClick={p.onClick}
    >
      <p className={cl.previewTitle}>
        {p.index}. {p.title}
      </p>
      <div className={cl.previewImg}>
        <Image src={preview} alt="preview" />
      </div>
      <div className={cl.previewControls}>
        <button className={cl.button} onClick={p.onCopy}>
          <CopySvg />
        </button>
        <button className={cl.button} onClick={p.onDelete}>
          <TrashSvg />
        </button>
      </div>
    </div>
  );
};

export default SlidePreview;
