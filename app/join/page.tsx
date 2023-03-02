"use client";
import cl from "./joinPage.module.scss";
import ItamSvg from "../assets/vectors/itam.svg";
import QuollySvg from "../assets/vectors/quolly.svg";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import Link from "next/link";
import PinField from "@/components/ui/inputs/PinField/PinField";
import { useRef, useState } from "react";

const page = () => {
  const pinFieldRef = useRef<any>(null);
  const [formDisabled, setFormDisabled] = useState(false);
  const [error, setError] = useState("");

  const onPinComplete = (pin: string) => {
    // setFormDisabled(true);
    console.log(pin);
    setError("Неверный код игры");
  };

  const submitClick = () => {
    if (pinFieldRef.current) {
      pinFieldRef.current[0].focus();
    }
  };

  return (
    <main className={cl.joinPageWrapper}>
      <div className={cl.joinPage}>
        <QuollySvg className={cl.logoApp} />
        <form className={cl.joinPageForm}>
          <div className={cl.pinFieldWrapper}>
            <p className={cl.pinPlaceholder}>Введите код игры</p>
            <PinField
              innerRef={pinFieldRef}
              disabled={formDisabled}
              onComplete={onPinComplete}
              error={!!error}
              resolveError={() => setError("")}
            />
          </div>
          {error && <p className={cl.error}>{error}</p>}
          <MainButton
            className={cl.joinSubmit}
            disabled={formDisabled}
            onClick={submitClick}
            type="button"
          >
            Вступить!
          </MainButton>
        </form>
        <p className={cl.loginPageLink}>
          Учитель? <Link href="/login">Войти</Link>
        </p>
      </div>
      <div className={cl.joinPageFooter}>
        <ItamSvg />
      </div>
    </main>
  );
};

export default page;
