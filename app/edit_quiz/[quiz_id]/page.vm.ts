import { Quiz } from "@/components/types/quiz";
import { setQuizes } from "@/components/utils/quizStore";
import { getQuizes } from "@/components/utils/quizStore";
import { configure, makeAutoObservable } from "mobx";

// interface Answer {
//     id: number,
//     text: string,
//     is_correct: boolean
// }

// interface Question {
//     id: number
//     type: "default"
//     text: string
//     image?: string
//     answers: Answer[]
// }

// interface Quiz {
//     id: number
//     title: string
//     description: string
//     thumbnail?: string
//     questions: Question[]
// }

configure({
  enforceActions: "never",
});

export class editQuizViewModel {
  currentQuiz!: Quiz;
  selectedQuestionId!: number;

  constructor(id: number, quizes: Quiz[] | null) {
    if (quizes === null) return;
    // const quizes = getQuizes();
    const quiz = quizes.find((q) => q.id === id);
    if (quiz) {
      this.currentQuiz = quiz;
    } else {
      this.currentQuiz = {
        id: id,
        title: `Квиз ${id}`,
        description: "",
        questions: [
          {
            id: 1,
            type: "default",
            text: "",
            answers: [
              {
                id: 1,
                text: "",
                is_correct: true,
              },
              {
                id: 2,
                text: "",
                is_correct: false,
              },
              {
                id: 3,
                text: "",
                is_correct: false,
              },
              {
                id: 4,
                text: "",
                is_correct: false,
              },
            ],
          },
        ],
      };
      quizes.push(this.currentQuiz);
      setQuizes(quizes);
    }
    this.selectedQuestionId = this.currentQuiz.questions[0].id;
    makeAutoObservable(this);
  }

  public addQuestion = () => {
    const newId =
      this.currentQuiz.questions.reduce((max, q) => Math.max(max, q.id), 0) + 1;
    this.currentQuiz.questions.push({
      id: newId,
      type: "default",
      text: "",
      answers: [
        {
          id: 1,
          text: "",
          is_correct: true,
        },
        {
          id: 2,
          text: "",
          is_correct: false,
        },
        {
          id: 3,
          text: "",
          is_correct: false,
        },
        {
          id: 4,
          text: "",
          is_correct: false,
        },
      ],
    });
    this.selectedQuestionId = newId;
  };

  public saveQuiz = () => {
    const quizes = getQuizes();
    const newQuizes = quizes.filter((v) => v.id !== this.currentQuiz.id);
    newQuizes.push(this.currentQuiz);
    setQuizes(newQuizes);
    alert("Сохранено");
  };
}
