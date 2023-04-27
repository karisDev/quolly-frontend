"use client";
import cl from "./styles.module.scss";
import { QuestionScreen } from "./screens";
import SlidesScreen from "./screens/SlidesScreen";
import FiltersScreen from "./screens/FiltersScreen";

const Page = ({ params }: { params: any }) => {
  return (
    <main style={{ display: "none" }} className={cl.newQuizPageWrapper}>
      <SlidesScreen />
      <QuestionScreen />
      <FiltersScreen />
    </main>
  );
};

export default Page;