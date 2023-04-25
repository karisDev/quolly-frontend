import cl from "./styles.module.scss";
import { FiltersView, QuestionView, SlidesView } from "./views";

const Page = () => {
  return (
    <main style={{ display: "none" }} className={cl.newQuizPageWrapper}>
      <SlidesView />
      <QuestionView />
      <FiltersView />
    </main>
  );
};

export default Page;
