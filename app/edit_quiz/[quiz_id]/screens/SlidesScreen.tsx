"use client";
import cl from "../styles.module.scss";
import SlidePreview from "../components/SlidePreview";
import Button from "@/components/ui/buttons/Button";
import { FC, useEffect } from "react";
import { PropsWithVm } from "../page";
import { observer } from "mobx-react-lite";

const SlidesScreen: FC<PropsWithVm> = (x) => {
  return (
    <div className={cl.sideContainer}>
      {x.vm && x.vm.currentQuiz && x.vm.currentQuiz.questions.length > 0 ? (
        x.vm.currentQuiz.questions.map((v, index) => (
          <div key={index}>
            <SlidePreview
              title={v.text}
              active={x.vm!.selectedQuestionId === v.id}
              index={index + 1}
              onClick={() => {
                x.vm!.selectedQuestionId = v.id;
              }}
              onDelete={() => x.vm!.deleteQuestion(v.id)}
              onCopy={() => x.vm!.duplicateQuestion(v.id)}
            />
            <div className={cl.separator}></div>
          </div>
        ))
      ) : (
        <p>Нет вопросов</p>
      )}
      <Button
        style={{ marginTop: "auto" }}
        variant="small"
        onClick={x.vm?.addQuestion ?? console.log}
      >
        Добавить
      </Button>
    </div>
  );
};

export default observer(SlidesScreen);
