"use client";
import cl from "../styles.module.scss";
import SlidePreview from "../components/SlidePreview";
import Button from "@/components/ui/buttons/Button";
import { FC } from "react";

const SlidesScreen: FC = () => {
  return (
    <div className={cl.sideContainer}>
      <SlidePreview title="Что означает термин" index={1} onClick={() => {}} />
      <div className={cl.separator}></div>
      <SlidePreview title="Какого цвте солнце" index={2} onClick={() => {}} />
      <Button style={{ marginTop: "auto" }} variant="small" onClick={() => {}}>
        Добавить
      </Button>
    </div>
  );
};

export default SlidesScreen;
