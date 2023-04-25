export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  text: string;
  number: number;
  seconds: number;
  answers: Answer[];
}

export interface Leaderboard {
  players: Player[];
  currentPlayer: {
    place: number;
  } & Player;
}

export interface Player {
  name: string;
  score: number;
  scoreChange: number;
}
