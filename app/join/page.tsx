import cl from "./joinPage.module.scss";
import ItamSvg from "../assets/vectors/itam.svg";
import QuollySvg from "../assets/vectors/quolly.svg";
import EditSvg from "../assets/vectors/edit.svg";
import IconInput from "@/components/ui/inputs/IconInput/IconInput";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import Link from "next/link";

const page = () => {
  return (
    <main className={cl.joinPageWrapper}>
      <div className={cl.joinPage}>
        <QuollySvg className={cl.logoDesktop} />
        <form className={cl.joinPageForm}>
          <IconInput icon={<EditSvg />} placeholder="Введи код игры" />
          <MainButton>Войти!</MainButton>
        </form>
        <Link className={cl.loginPageLink} href="/login">
          Учитель?
        </Link>
      </div>
      <div className={cl.joinPageFooter}>
        <ItamSvg className={cl.logoClub} />
      </div>
    </main>
  );
};

export default page;
