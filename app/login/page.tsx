"use client";
import cl from "./loginPage.module.scss";
import EmailSvg from "../assets/vectors/email.svg";
import PasswordSvg from "../assets/vectors/password.svg";
import QuollySvg from "../assets/vectors/quolly.svg";
import IconInput from "@/components/ui/inputs/IconInput/IconInput";
import Button from "@/components/ui/buttons/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ItamWatermark from "@/components/ui/watermarks/ItamWatermark";

const Page = () => {
  const router = useRouter();
  const [formDisabled, setFormDisabled] = useState(false);
  const [error, setError] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.email.value || !e.currentTarget.password.value) {
      setError("Неверный логин или пароль");
      return;
    }
    setFormDisabled(true);
    router.push("/dashboard");
  };

  return (
    <main style={{ display: "none" }} className={cl.loginPageWrapper}>
      <div className={cl.loginPage}>
        <QuollySvg className={cl.logoApp} />
        <form className={cl.loginPageForm} onSubmit={onFormSubmit}>
          <IconInput
            id="email"
            icon={<EmailSvg />}
            type="email"
            placeholder="Введите почту"
            disabled={formDisabled}
          />
          <IconInput
            id="password"
            icon={<PasswordSvg />}
            placeholder="Введите пароль"
            type="password"
            disabled={formDisabled}
          />
          {error && <p className={cl.error}>{error}</p>}
          <Button
            className={cl.loginSubmit}
            type="submit"
            disabled={formDisabled}
          >
            Войти
          </Button>
        </form>
        <div className={cl.loginPageFooter}>
          <p className={cl.forgotPassword}>
            Возникли проблемы?
            <br />
            Напишите на почту{" "}
            <a href="mailto:sddsds@gmail.com">sddsds@gmail.com</a>
          </p>
          <Link className={cl.joinGameLink} href="/join">
            Присоединиться к игре
          </Link>
        </div>
      </div>
      <ItamWatermark />
    </main>
  );
};

export default Page;
