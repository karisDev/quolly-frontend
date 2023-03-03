"use client";
import AccentInput from "@/components/ui/inputs/AccentInput/AccentInput";
import cl from "./dashboardPage.module.scss";
import SearchSvg from "../assets/vectors/search.svg";

const Page = () => {
  return (
    <div className={cl.dashboardPageWrapper}>
      <div className={cl.pageHeader}>
        <h1>Мои квизы</h1>
        <div className={cl.filters}>
          <AccentInput
            className={cl.search}
            type="text"
            placeholder="Поиск"
            icon={<SearchSvg />}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
