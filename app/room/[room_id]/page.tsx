"use client";
import { useEffect, useState } from "react";
import EnterScreen from "./EnterScreen";
import QuestionScreen from "./QuestionScreen";
import cl from "./roomPage.module.scss";
import WaitingScreen from "./WaitingScreen";

enum GameStatus {
  NAME_INPUT,
  WAITING,
  QUESTION,
  ANSWER,
  LEADERBOARD,
  END,
}

const MockQuestion = {
  questionText: "Какой сегодня день?",
  questionNumber: 1,
  secondsLeft: 3,
  timeGiven: 15,
  answers: ["Понедельник", "Вторник", "Среда", "Четверг"],
  correctAnswer: "Вторник",
};

// @ts-ignore
const Page = ({ params }) => {
  const [gameStatus, setGameStatus] = useState(GameStatus.NAME_INPUT);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const roomId = params.room_id;

  const onChooseAnswer = (answer: string) => {
    if (gameStatus !== GameStatus.QUESTION) return;

    setSelectedAnswer(answer);
  };

  const onNameEnter = (name: string) => {
    setGameStatus(GameStatus.WAITING);

    setTimeout(() => {
      setGameStatus(GameStatus.QUESTION);
    }, 3000);
  };

  // temporary
  const [timeLeft, setTimeLeft] = useState(-1);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    if (gameStatus == GameStatus.QUESTION) {
      setCorrectAnswer("");
      setTimeLeft(15);
    }
  }, [gameStatus]);

  useEffect(() => {
    function decrementTime() {
      setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : timeLeft));
    }

    const interval = setInterval(() => {
      decrementTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameStatus(GameStatus.ANSWER);
      setCorrectAnswer(MockQuestion.correctAnswer);
    }
  }, [timeLeft]);

  return (
    <div className={cl.roomPageWrapper}>
      {gameStatus === GameStatus.NAME_INPUT && (
        <EnterScreen onNameEnter={onNameEnter} />
      )}
      {gameStatus === GameStatus.WAITING && <WaitingScreen />}
      {/* question or answer */}
      {gameStatus === GameStatus.QUESTION && (
        <QuestionScreen
          onChooseAnswer={onChooseAnswer}
          selectedAnswer={selectedAnswer}
          {...MockQuestion}
          secondsLeft={timeLeft}
          correctAnswer={correctAnswer}
        />
      )}
      {gameStatus === GameStatus.ANSWER && (
        <QuestionScreen
          onChooseAnswer={onChooseAnswer}
          selectedAnswer={selectedAnswer}
          {...MockQuestion}
          secondsLeft={timeLeft}
          correctAnswer={correctAnswer}
        />
      )}
    </div>
  );
};

export default Page;
