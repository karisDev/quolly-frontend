import { Question, Quiz } from "@/components/types/quiz";

const MockQuizes = {
  description: "",
  id: 1,
  title: "Квиз",
  questions: [
    {
      id: 1,
      text: "У клиент-серверного приложения должен быть…?",
      answers: [
        {
          id: 1,
          text: "Вход и выход",
          is_correct: false,
        },
        {
          id: 2,
          text: "Бэкенд и фронтенд",
          is_correct: true,
        },
        {
          id: 3,
          text: "Начало и конец",
          is_correct: false,
        },
        {
          id: 4,
          text: "Фулстек и софтскил",
          is_correct: false,
        },
      ],
    },
    {
      id: 2,
      text: "Ближайший родственник Java с российскими корнями?",
      answers: [
        {
          id: 1,
          text: "JavaScript",
          is_correct: false,
        },
        {
          id: 2,
          text: "C#",
          is_correct: false,
        },
        {
          id: 3,
          text: "Dart",
          is_correct: false,
        },
        {
          id: 4,
          text: "Kotlin",
          is_correct: true,
        },
      ],
    },
    {
      id: 3,
      text: "Большая часть ОС Linux написана на…?",
      answers: [
        {
          id: 1,
          text: "Java",
          is_correct: false,
        },
        {
          id: 2,
          text: "C++",
          is_correct: false,
        },
        {
          id: 3,
          text: "C",
          is_correct: true,
        },
        {
          id: 4,
          text: "C#",
          is_correct: false,
        },
      ],
    },
    {
      id: 4,
      text: "Какой софт подходит для обработки видео?",
      answers: [
        {
          id: 1,
          text: "Фотошоп",
          is_correct: false,
        },
        {
          id: 2,
          text: "Фигма",
          is_correct: false,
        },
        {
          id: 3,
          text: "Кейноут",
          is_correct: false,
        },
        {
          id: 4,
          text: "Блендер",
          is_correct: true,
        },
      ],
    },
    {
      id: 5,
      text: "В каком году возник стиль киберпанк?",
      answers: [
        {
          id: 1,
          text: "1973",
          is_correct: false,
        },
        {
          id: 2,
          text: "2003",
          is_correct: false,
        },
        {
          id: 3,
          text: "1983",
          is_correct: true,
        },
        {
          id: 4,
          text: "1993",
          is_correct: false,
        },
      ],
    },
    {
      id: 6,
      text: "Какой школы дизайна не существовало?",
      answers: [
        {
          id: 1,
          text: "Баухаус",
          is_correct: false,
        },
        {
          id: 2,
          text: "Ауфраумен",
          is_correct: true,
        },
        {
          id: 3,
          text: "Вхутеин",
          is_correct: false,
        },
        {
          id: 4,
          text: "Вхутемас",
          is_correct: false,
        },
      ],
    },
    {
      id: 7,
      text: "Какая игра принадлежит российской студии разработки?",
      answers: [
        {
          id: 1,
          text: "Call of Duty: Modern Warfare",
          is_correct: false,
        },
        {
          id: 2,
          text: "Heroes Might and Magic III",
          is_correct: false,
        },
        {
          id: 3,
          text: "Diablo 2",
          is_correct: false,
        },
        {
          id: 4,
          text: "Atomic Heart",
          is_correct: true,
        },
      ],
    },
    {
      id: 8,
      text: "Назовите знаменитую развлекательную игру из вселенной “Ведьмака”?",
      answers: [
        {
          id: 1,
          text: "Шахматы",
          is_correct: false,
        },
        {
          id: 2,
          text: "Гвинт",
          is_correct: true,
        },
        {
          id: 3,
          text: "Нарды",
          is_correct: false,
        },
        {
          id: 4,
          text: "Манчкин",
          is_correct: false,
        },
      ],
    },
    {
      id: 9,
      text: "Какую игру запускают на всех доступных устройствах?",
      answers: [
        {
          id: 1,
          text: "Пасьянс",
          is_correct: false,
        },
        {
          id: 2,
          text: "Brawl Stars",
          is_correct: false,
        },
        {
          id: 3,
          text: "Doom",
          is_correct: true,
        },
        {
          id: 4,
          text: "Skyrim",
          is_correct: false,
        },
      ],
    },
    {
      id: 10,
      text: "Разрешения в GNU/Linux бывают на чтение, запись и...?",
      answers: [
        {
          id: 1,
          text: "Удаление",
          is_correct: false,
        },
        {
          id: 2,
          text: "Перемещение",
          is_correct: false,
        },
        {
          id: 3,
          text: "Исполнение",
          is_correct: true,
        },
        {
          id: 4,
          text: "Переименование",
          is_correct: false,
        },
      ],
    },
    {
      id: 11,
      text: "Какой продукт из мира IT использует пингвина в качестве лого?",
      answers: [
        {
          id: 1,
          text: "FreeBSD",
          is_correct: false,
        },
        {
          id: 2,
          text: "Киндер Пингви",
          is_correct: false,
        },
        {
          id: 3,
          text: "Linux",
          is_correct: true,
        },
        {
          id: 4,
          text: "Астра Линукс",
          is_correct: false,
        },
      ],
    },
    {
      id: 12,
      text: "DDOS атака на сайт проводится при помощи большого количества ...?",
      answers: [
        {
          id: 1,
          text: "Запросов",
          is_correct: true,
        },
        {
          id: 2,
          text: "Вопросов",
          is_correct: false,
        },
        {
          id: 3,
          text: "Звонков",
          is_correct: false,
        },
        {
          id: 4,
          text: "Портов",
          is_correct: false,
        },
      ],
    },
  ],
} as Quiz;

export default MockQuizes;
