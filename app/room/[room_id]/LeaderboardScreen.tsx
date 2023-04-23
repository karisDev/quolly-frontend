import { FC } from "react";
import cl from "./roomPage.module.scss";

interface IProps {
  questionNumber: number;
  questionCount: number;
  players: {
    name: string;
    score: number;
    earned: number;
  }[];
  currentPlayer: {
    place: number;
    name: string;
    score: number;
    earned: number;
  };
}

const LeaderboardScreen: FC<IProps> = ({
  players,
  currentPlayer,
  questionNumber,
  questionCount,
}) => {
  return (
    <div className={cl.leaderboardScreenWrapper}>
      <div className={cl.leaderboardHeader}>
        <p className={cl.helperText}>
          Пройдено {questionNumber} из {questionCount}
        </p>
        <h1 className={cl.leaderboardTitle}>Результаты</h1>
      </div>
      <div className={cl.leaderboard}>
        {players.map((player, index) => (
          <div key={index} className={cl.leaderboardCard}>
            <p className={cl.rank}>#{index + 1}</p>
            <p className={cl.name}>{player.name}</p>
            <p className={cl.earned}>+{player.earned}</p>
            <p className={cl.score}>{player.score}</p>
          </div>
        ))}
      </div>
      <div className={cl.currentPlayerWrapper}>
        <div className={`${cl.leaderboardCard} ${cl.currentPlayer}`}>
          <p className={cl.rank}>#{currentPlayer.place}</p>
          <p className={cl.name}>{currentPlayer.name}</p>
          <p className={cl.earned}>+{currentPlayer.earned}</p>
          <p className={cl.score}>{currentPlayer.score}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
