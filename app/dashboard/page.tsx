"use client";
import AccentInput from "@/components/ui/inputs/AccentInput/AccentInput";
import cl from "./dashboardPage.module.scss";
import SearchSvg from "../assets/vectors/search.svg";
import DeleteSvg from "../assets/vectors/delete.svg";
import BookmarkSvg from "../assets/vectors/bookmark.svg";
import EditPenSvg from "../assets/vectors/edit_pen.svg";
import PlaySvg from "../assets/vectors/play.svg";
import IconButton from "@/components/ui/buttons/IconButton";
import { useEffect, useState } from "react";
import { getQuizes } from "@/components/utils/quizStore";
import { useRouter } from "next/navigation";
import { Quiz } from "@/components/types/quiz";

// const mockQuizes = [
//   {
//     id: 1,
//     title: "General Knowledge Quiz",
//     lastModified: "3 days ago",
//     questionsCount: 15,
//     isBookmarked: false,
//   },

//   {
//     id: 2,
//     title: "Movie Trivia Quiz",
//     lastModified: "1 week ago",
//     questionsCount: 20,
//     isBookmarked: true,
//   },

//   {
//     id: 3,
//     title: "Mathematics Quiz",
//     lastModified: "2 days ago",
//     questionsCount: 12,
//     isBookmarked: false,
//   },

//   {
//     id: 4,
//     title: "Science Quiz",
//     lastModified: "4 days ago",
//     questionsCount: 18,
//     isBookmarked: true,
//   },

//   {
//     id: 5,
//     title: "Geography Quiz",
//     lastModified: "5 days ago",
//     questionsCount: 10,
//     isBookmarked: false,
//   },

//   {
//     id: 6,
//     title: "History Quiz",
//     lastModified: "1 day ago",
//     questionsCount: 25,
//     isBookmarked: true,
//   },

//   {
//     id: 7,
//     title: "Sports Quiz",
//     lastModified: "6 days ago",
//     questionsCount: 15,
//     isBookmarked: false,
//   },
// ];

const Page = () => {
  const router = useRouter();
  const [quizes, setQuizes] = useState<Quiz[]>([]);

  useEffect(() => {
    setQuizes(getQuizes());
  }, []);
  return (
    <main style={{ display: "none" }} className={cl.dashboardPageWrapper}>
      <div className={cl.pageHeader}>
        <h1>Мои квизы</h1>
        <div className={cl.filters}>
          <AccentInput
            className={cl.search}
            type="text"
            placeholder="Поиск"
            icon={<SearchSvg />}
          />
        </div>
      </div>
      <div className={cl.quizesWrapper}>
        {quizes.map((quiz) => (
          <div className={cl.quizCard} key={quiz.id}>
            <div className={cl.imageWrapper}>
              <div className={cl.controls}>
                <button className={cl.iconButton} aria-label="Удалить">
                  <DeleteSvg />
                </button>
                <button className={cl.iconButton} aria-label="В заметки">
                  <BookmarkSvg />
                </button>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={cl.image}
                src="https://picsum.photos/300/200"
                alt=""
              />
            </div>
            <div className={cl.quizCardInfo}>
              <h3>{quiz.title}</h3>
              <p className={cl.helperText}>
                {/* {`${quiz.lastModified} · ${quiz.questionsCount} вопросов`} */}
              </p>
            </div>
            <div className={cl.quizCardActions}>
              <IconButton
                outlined
                icon={<EditPenSvg />}
                onClick={() => router.push(`/edit_quiz/${quiz.id}`)}
              >
                Изменить
              </IconButton>
              <IconButton
                icon={<PlaySvg />}
                onClick={() =>
                  // @ts-ignore
                  (window.location = "https://quolly-admin.onixx.org/")
                }
              >
                Запустить
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
