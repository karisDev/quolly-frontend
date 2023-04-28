"use client";
import { FC, useEffect } from "react";
import cl from "../roomPage.module.scss";
import { Question } from "@/components/types/quiz";
import { observer } from "mobx-react-lite";
import { roomViewModel } from "../room.vm";

interface Props {
  vm: roomViewModel;
}

const QuestionScreen: FC<Props> = ({ vm }) => {
  // format seconds to 00:00
  const formattedTimeLeft = (s: number) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    console.log(`${vm.question.text}`);
  }, [vm.question]);
  return (
    <div className={cl.questionScreenWrapper}>
      <div className={cl.questionDetails}>
        <p className={cl.helperText}>
          Вопрос {vm.question.id ?? ""} из {vm.quiz.questions.length}
        </p>
        <h1 className={cl.questionText}>{vm.question.text ?? ""}</h1>
        <h1
          className={`${cl.timeLeft} ${
            vm.secondsLeft <= 5 ? cl.hurryAlert : ""
          }`}
        >
          {formattedTimeLeft(vm.secondsLeft)}
        </h1>
      </div>
      <div
        className={`${cl.answersWrapper} ${
          vm.selectedAnswerId ? cl.answered : ""
        } ${vm.state === "ANSWER" ? cl.revealed : ""}`}
      >
        {vm.question.answers.map((a, index) => (
          <div
            key={index}
            className={`${cl.answerCard} ${
              a.id === vm.selectedAnswerId ? cl.selectedAnswer : ""
            } ${
              vm.state === "ANSWER" && a.is_correct
                ? cl.correctAnswer
                : cl.wrongAnswer
            }`}
            onClick={() => vm.selectAnswer(a.id)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(QuestionScreen);
