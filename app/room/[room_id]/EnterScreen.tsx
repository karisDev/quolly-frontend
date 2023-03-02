"use client";
import IconInput from "@/components/ui/inputs/IconInput/IconInput";
import cl from "./roomPage.module.scss";
import EditSvg from "../../assets/vectors/edit.svg";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import ItamWatermark from "@/components/ui/watermarks/ItamWatermark";
import { FC, useState } from "react";

interface IProps {
  onNameEnter: (name: string) => void;
}

const EnterScreen: FC<IProps> = ({ onNameEnter }) => {
  const [error, setError] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value.trim();

    if (name.length < 2) {
      setError("Имя должно быть не менее 2 символов");
      return;
    }
    if (name.length > 15) {
      setError("Слишком длинное! Максимум 15 символов 😺");
      return;
    }
    setError("");

    onNameEnter(name);
  };

  return (
    <div className={cl.enterScreenWrapper}>
      <form className={cl.enterScreenBody} onSubmit={onSubmit}>
        <h1 className={cl.enterScreenHeader}>Привет!</h1>
        <IconInput
          className={cl.enterScreenInput}
          onChange={() => setError("")}
          name="name"
          icon={<EditSvg />}
          placeholder="Введи свое имя"
          error={!!error}
          autoFocus
        />
        {error && <p className={cl.error}>{error}</p>}
        <MainButton type="submit" disabled={!!error}>
          Поехали!
        </MainButton>
      </form>
      <ItamWatermark />
    </div>
  );
};

export default EnterScreen;
