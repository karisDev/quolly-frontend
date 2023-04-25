import { FC } from "react";
import cl from "../roomPage.module.scss";
import { Question } from "../types";

interface Props {
  onChooseAnswer: (answer: number) => void;
  question: Question | null;
  selectedAnswerId: number | null;
  correctAnswerId: number | null;
  secondsLeft: number;
}

const QuestionScreen: FC<Props> = ({
  onChooseAnswer,
  question: q,
  selectedAnswerId,
  correctAnswerId,
  secondsLeft,
}) => {
  // format seconds to 00:00
  const formattedTimeLeft = (s: number) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  if (!q) return <></>;
  return (
    <div className={cl.questionScreenWrapper}>
      <div className={cl.questionDetails}>
        <p className={cl.helperText}>Вопрос {q.number ?? ""}</p>
        <h1 className={cl.questionText}>{q.text ?? ""}</h1>
        <h1
          className={`${cl.timeLeft} ${secondsLeft <= 5 ? cl.hurryAlert : ""}`}
        >
          {formattedTimeLeft(secondsLeft)}
        </h1>
      </div>
      <div
        className={`${cl.answersWrapper} ${
          selectedAnswerId ? cl.answered : ""
        } ${correctAnswerId ? cl.revealed : ""}`}
      >
        {q.answers.map((a, index) => (
          <div
            key={index}
            className={`${cl.answerCard} ${
              a.id === selectedAnswerId ? cl.selectedAnswer : ""
            } ${
              correctAnswerId && a.id === correctAnswerId
                ? cl.correctAnswer
                : cl.wrongAnswer
            }`}
            onClick={() => onChooseAnswer(a.id)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
