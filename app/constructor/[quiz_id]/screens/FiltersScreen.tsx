"use client";
import Dropdown from "@/components/ui/dropdowns/Dropdown";
import cl from "../styles.module.scss";
import QuizType from "../assets/quiz_type.svg";
import { useState } from "react";

const quizTypes = ["Один из списка", "Да / нет", "Ввод ответа", "Слайд"];

const FiltersScreen = () => {
  const [quizType, setQuizType] = useState(quizTypes[0]);

  return (
    <div className={cl.sideContainer}>
      <Dropdown
        labelIcon={<QuizType />}
        labelText="Тип вопроса"
        items={quizTypes}
        value={quizType}
        onClick={setQuizType}
      />
    </div>
  );
};

export default FiltersScreen;
