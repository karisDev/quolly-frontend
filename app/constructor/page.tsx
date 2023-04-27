"use client";
import cl from "./styles.module.scss";
import SlidesScreen from "./screens/SlidesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import QuestionScreen from "./screens/QuestionScreen";

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
