export interface Answer {
  id: number;
  text: string;
  is_correct: boolean;
}

export interface Question {
  id: number;
  type: "default";
  text: string;
  image?: string;
  answers: Answer[];
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  questions: Question[];
}
