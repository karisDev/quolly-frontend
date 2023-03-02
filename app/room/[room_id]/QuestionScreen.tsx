"use client";
import { FC } from "react";
import cl from "./roomPage.module.scss";

interface IProps {
  onAnswer: (answer: string) => void;
  questionText: string;
  questionNumber: number;
  timeLeft: number;
  answers: string[];
}

const QuestionScreen: FC<IProps> = ({
  onAnswer,
  questionText,
  questionNumber,
  timeLeft,
  answers,
}) => {
  return (
    <div className={cl.questionScreenWrapper}>
      <div className={cl.questionDetails}>
        <p className={cl.helperText}>Вопрос {questionNumber}</p>
        <h1 className={cl.questionText}>{questionText}</h1>
        <p className={cl.timeLeft}>{timeLeft}</p>
      </div>
      <div className={cl.answersWrapper}>
        {answers.map((answer, index) => (
          <div
            key={index}
            className={cl.answerCard}
            onClick={() => onAnswer(answer)}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
