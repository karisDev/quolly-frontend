"use client";
import { useEffect, useState } from "react";
import EnterScreen from "./EnterScreen";
import LeaderboardScreen from "./LeaderboardScreen";
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
  timeGiven: 10,
  answers: ["Понедельник", "Вторник", "Среда", "Четверг"],
  correctAnswer: "Вторник",
};

const MockLeaderboard = {
  questionNumber: 1,
  questionCount: 10,
  players: [
    {
      name: "ИванКрутышкин Крутышкин",
      score: 12.84,
      earned: 1.23,
    },
    {
      name: "Петр",
      score: 4.63,
      earned: 1.22,
    },
    {
      name: "Сидор",
      score: 3.12,
      earned: 1.21,
    },
    {
      name: "Иван",
      score: 5.84,
      earned: 1.23,
    },
  ],
  currentPlayer: {
    place: 9,
    name: "Петр",
    score: 4.63,
    earned: 1.22,
  },
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
    }, 2500);
  };

  // temporary
  const [timeLeft, setTimeLeft] = useState(-1);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    switch (gameStatus) {
      case GameStatus.QUESTION:
        setCorrectAnswer("");
        setTimeLeft(8);
        break;
      case GameStatus.ANSWER:
        setTimeout(() => {
          setGameStatus(GameStatus.LEADERBOARD);
        }, 3000);
        break;
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
    <main style={{ display: "none" }} className={cl.roomPageWrapper}>
      {gameStatus === GameStatus.NAME_INPUT && (
        <EnterScreen onNameEnter={onNameEnter} />
      )}
      {gameStatus === GameStatus.WAITING && <WaitingScreen />}
      {/* question or answer */}
      {(gameStatus === GameStatus.ANSWER ||
        gameStatus === GameStatus.QUESTION) && (
        <QuestionScreen
          onChooseAnswer={onChooseAnswer}
          selectedAnswer={selectedAnswer}
          {...MockQuestion}
          secondsLeft={timeLeft}
          correctAnswer={correctAnswer}
        />
      )}
      {gameStatus === GameStatus.LEADERBOARD && (
        <LeaderboardScreen {...MockLeaderboard} />
      )}
    </main>
  );
};

export default Page;
