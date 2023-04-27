"use client";
import Dropdown from "@/components/ui/dropdowns/Dropdown";
import cl from "../styles.module.scss";
import QuizType from "../assets/quiz_type.svg";
import { FC, useState } from "react";
import Button from "@/components/ui/buttons/Button";

const quizTypes = ["Один из списка", "Да / нет", "Ввод ответа", "Слайд"];

interface Props {
  onSave: () => void;
}

const FiltersScreen: FC<Props> = ({ onSave }) => {
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
      <Button style={{ marginTop: "auto" }} onClick={onSave} variant="small">
        Сохранить
      </Button>
    </div>
  );
};

export default FiltersScreen;
