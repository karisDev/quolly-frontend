"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import EnterScreen from "./EnterScreen";
import QuestionScreen from "./QuestionScreen";
import cl from "./roomPage.module.scss";
const WaitingScreen = dynamic(() => import("./WaitingScreen"), { ssr: false });

enum GameStatus {
  NAME_INPUT,
  WAITING,
  QUESTION,
  ANSWER,
  LEADERBOARD,
  END,
}

/*
  onAnswer: (answer: string) => void;
  questionText: string;
  questionNumber: number;
  timeLeft: number;
  answers: string[];
*/
const MockQuestion = {
  questionText: "Какой сегодня день?",
  questionNumber: 1,
  timeLeft: 3,
  timeGiven: 15,
  answers: ["Понедельник", "Вторник", "Среда", "Четверг"],
};

// @ts-ignore
const page = ({ params }) => {
  const [gameStatus, setGameStatus] = useState(GameStatus.QUESTION);
  const [timeLeft, setTimeLeft] = useState(15);
  const roomId = params.room_id;

  const onAnswer = (answer: string) => {
    console.log(answer);
  };

  useEffect(() => {
    // change time left every second, loop it
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cl.roomPageWrapper}>
      {gameStatus === GameStatus.NAME_INPUT && (
        <EnterScreen onNameEnter={() => setGameStatus(GameStatus.WAITING)} />
      )}
      {gameStatus === GameStatus.WAITING && <WaitingScreen />}
      {gameStatus === GameStatus.QUESTION && (
        <QuestionScreen
          onAnswer={onAnswer}
          {...MockQuestion}
          timeLeft={timeLeft}
        />
      )}
    </div>
  );
};

export default page;
