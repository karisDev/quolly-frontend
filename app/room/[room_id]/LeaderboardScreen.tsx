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
            <div className={cl.leaderboardCardRank}>#{index + 1}</div>
            <div className={cl.leaderboardCardName}>{player.name}</div>
            <div className={cl.leaderboardCardEarned}>+{player.earned}</div>
            <div className={cl.leaderboardCardScore}>{player.score}</div>
          </div>
        ))}
      </div>
      <div className={cl.currentPlayerWrapper}>
        <div className={`${cl.leaderboardCard} ${cl.currentPlayer}`}>
          <div className={cl.leaderboardCardRank}>#{currentPlayer.place}</div>
          <div className={cl.leaderboardCardName}>{currentPlayer.name}</div>
          <div className={cl.leaderboardCardEarned}>
            +{currentPlayer.earned}
          </div>
          <div className={cl.leaderboardCardScore}>{currentPlayer.score}</div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
