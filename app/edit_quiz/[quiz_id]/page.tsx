"use client";
import cl from "./styles.module.scss";
import SlidesScreen from "./screens/SlidesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import QuestionScreen from "./screens/QuestionScreen";
import "@/styles/index.scss";
import MainNav from "@/components/ui/navbars/MainNav";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createQuiz, getMaxId, getQuizes } from "@/components/utils/quizStore";
import { editQuizViewModel } from "./page.vm";
import { observer } from "mobx-react-lite";
import { Quiz } from "@/components/types/quiz";

export interface PropsWithVm {
  vm: editQuizViewModel | null;
}

const Page = ({ params }: { params: any }) => {
  const router = useRouter();
  const [quizesStorage, setQuizesStorage] = useState<Quiz[] | null>(null);
  const vm = useMemo(
    () => new editQuizViewModel(params.quiz_id, quizesStorage),
    [params.quiz_id, quizesStorage]
  );

  useEffect(() => {
    if (params.quiz_id === "new") {
      const id = getMaxId() + 1;
      router.push(`/edit_quiz/${id}`);
      return;
    }
    setQuizesStorage(getQuizes());
  }, [params.quiz_id, router]);

  return (
    <>
      <main style={{ display: "none" }} className={cl.newQuizPageWrapper}>
        <SlidesScreen vm={vm} />
        <QuestionScreen vm={vm} />
        <FiltersScreen onSave={vm.saveQuiz} vm={vm} />
      </main>
    </>
  );
};

export default observer(Page);
