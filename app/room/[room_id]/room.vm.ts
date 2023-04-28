"use client";
import {
  configure,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { Leaderboard } from "./types";
import MockQuizes from "./useMockQuizes";
import { Quiz, Question } from "@/components/types/quiz";

type GameState =
  | "JOIN"
  | "WAITING"
  | "QUESTION"
  | "ANSWER"
  | "LEADERBOARD"
  | "END";

const MockQuiz = MockQuizes;

const MockQuestion = {
  text: "Какой сегодня день?",
  number: 1,
  seconds: 10,
  answers: [
    {
      id: 1,
      text: "Понедельник",
    },
    {
      id: 2,
      text: "Вторник",
    },
    {
      id: 3,
      text: "Среда",
    },
    {
      id: 4,
      text: "Четверг",
    },
  ],
};

const MockLeaderboard = {
  players: [
    {
      name: "ИванКрутышкин Крутышкин",
      score: 12.84,
      scoreChange: 1.23,
    },
    {
      name: "Петр",
      score: 4.63,
      scoreChange: 1.22,
    },
    {
      name: "Сидор",
      score: 3.12,
      scoreChange: 1.21,
    },
    {
      name: "Иван",
      score: 5.84,
      scoreChange: 1.23,
    },
  ],
  currentPlayer: {
    place: 9,
    name: "Петр",
    score: 4.63,
    scoreChange: 1.22,
  },
} as Leaderboard;

configure({
  enforceActions: "never",
});

export class roomViewModel {
  state: GameState = "JOIN";
  secondsLeft: number = -1;
  selectedAnswerId: number | null = null;
  question: Question = MockQuiz.questions[0];
  questionCount: number | null = MockQuiz.questions.length;
  leaderboard: Leaderboard | null = MockLeaderboard;
  quiz: Quiz = MockQuiz;

  constructor(public roomId: string) {
    makeAutoObservable(this);

    this.timerInterval = setInterval(() => {
      this.autoupdateTimer();
    }, 1000);
  }

  private timerInterval: NodeJS.Timer | null = null;

  private onTimeDecrement = () => {
    if (this.secondsLeft === 0) {
      this.state = "ANSWER";
      // setTimeout(() => {
      //   this.state = "LEADERBOARD";
      // }, 2500);
      setTimeout(() => {
        const currentQuestionIndex = this.quiz.questions.findIndex(
          (q) => this.question.id === q.id
        );
        if (currentQuestionIndex !== this.quiz.questions.length - 1) {
          this.state = "QUESTION";
          this.question = this.quiz.questions[currentQuestionIndex + 1];
          this.secondsLeft = 10;
          this.selectedAnswerId = null;
          console.log(currentQuestionIndex + 1);
        } else {
          this.state = "LEADERBOARD";
        }
      }, 3000);
    }
  };

  private autoupdateTimer = () => {
    if (this.secondsLeft > 0) {
      this.secondsLeft -= 1;
      this.onTimeDecrement();
      return;
    }
  };

  public enterGame = (name: string) => {
    if (name.length < 2) return;

    this.state = "WAITING";
    setTimeout(() => {
      this.secondsLeft = 10;
      this.state = "QUESTION";
    }, 3000);
  };

  public selectAnswer = (id: number) => {
    if (this.selectedAnswerId) return;

    this.selectedAnswerId = id;
  };

  public dispose = () => {
    if (this.timerInterval !== null) clearInterval(this.timerInterval);
  };
}
