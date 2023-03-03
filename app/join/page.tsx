"use client";
import cl from "./joinPage.module.scss";
import QuollySvg from "../assets/vectors/quolly.svg";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import Link from "next/link";
import PinField from "@/components/ui/inputs/PinField/PinField";
import { useRef, useState } from "react";
import { redirect } from "next/navigation";
import ItamWatermark from "@/components/ui/watermarks/ItamWatermark";

const Page = () => {
  const pinFieldRef = useRef<any>(null);
  const [formDisabled, setFormDisabled] = useState(false);
  const [error, setError] = useState("");

  const onPinComplete = (pin: string) => {
    // setFormDisabled(true);
    // setError("Неверный код игры");
    console.log(pin);
    redirect("/room/" + pin);
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
          Учитель?{" "}
          <Link href="/login" prefetch>
            Войти
          </Link>
        </p>
      </div>
      <ItamWatermark />
    </main>
  );
};

export default Page;
