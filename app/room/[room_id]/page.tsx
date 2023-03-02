"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
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
  timeLeft: 10,
  answers: ["Понедельник", "Вторник", "Среда", "Четверг"],
};

// @ts-ignore
const page = ({ params }) => {
  const [gameStatus, setGameStatus] = useState(GameStatus.QUESTION);
  const roomId = params.room_id;

  const onAnswer = (answer: string) => {
    console.log(answer);
  };

  return (
    <div className={cl.roomPageWrapper}>
      {gameStatus === GameStatus.NAME_INPUT && (
        <EnterScreen onNameEnter={() => setGameStatus(GameStatus.WAITING)} />
      )}
      {gameStatus === GameStatus.WAITING && <WaitingScreen />}
      {gameStatus === GameStatus.QUESTION && (
        <QuestionScreen onAnswer={onAnswer} {...MockQuestion} />
      )}
    </div>
  );
};

export default page;
