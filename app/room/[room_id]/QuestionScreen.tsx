import { FC } from "react";
import cl from "./roomPage.module.scss";

interface IProps {
  onChooseAnswer: (answer: string) => void;
  questionText: string;
  questionNumber: number;
  timeGiven: number;
  secondsLeft: number;
  answers: string[];
  selectedAnswer?: string;
  correctAnswer?: string;
}

const QuestionScreen: FC<IProps> = ({
  onChooseAnswer,
  questionText,
  questionNumber,
  secondsLeft,
  answers,
  selectedAnswer,
  correctAnswer,
}) => {
  // format seconds to 00:00
  const formattedTimeLeft = (s: number) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className={cl.questionScreenWrapper}>
      <div className={cl.questionDetails}>
        <p className={cl.helperText}>Вопрос {questionNumber}</p>
        <h1 className={cl.questionText}>{questionText}</h1>
        <h1
          className={`${cl.timeLeft} ${secondsLeft <= 5 ? cl.hurryAlert : ""}`}
        >
          {formattedTimeLeft(secondsLeft)}
        </h1>
      </div>
      <div
        className={`${cl.answersWrapper} ${selectedAnswer ? cl.answered : ""} ${
          correctAnswer ? cl.revealed : ""
        }`}
      >
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`${cl.answerCard} ${
              answer === selectedAnswer ? cl.selectedAnswer : ""
            } ${
              correctAnswer && answer === correctAnswer
                ? cl.correctAnswer
                : cl.wrongAnswer
            }`}
            onClick={() => onChooseAnswer(answer)}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
