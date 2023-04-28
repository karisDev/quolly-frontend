"use client";
import Dropdown from "@/components/ui/dropdowns/Dropdown";
import cl from "../styles.module.scss";
import QuizType from "../assets/quiz_type.svg";
import { FC, useState } from "react";
import Button from "@/components/ui/buttons/Button";
import { PropsWithVm } from "../page";
import { observer } from "mobx-react-lite";

const quizTypes = ["default", "true/false"];

interface Props extends PropsWithVm {
  onSave: () => void;
}

const FiltersScreen: FC<Props> = (x) => {
  if (!x.vm || !x.vm.currentQuiz) return <></>;
  const id = x.vm.selectedQuestionId;
  const question = x.vm.currentQuiz.questions.find((v) => v.id === id)!;

  return (
    <div className={cl.sideContainer}>
      <Dropdown
        labelIcon={<QuizType />}
        labelText="Тип вопроса"
        items={quizTypes}
        value={question.type}
        onClick={(t) => {
          question.type = t === "default" ? "default" : "true/false";
        }}
      />
      <Button style={{ marginTop: "auto" }} onClick={x.onSave} variant="small">
        Сохранить
      </Button>
    </div>
  );
};

export default observer(FiltersScreen);
