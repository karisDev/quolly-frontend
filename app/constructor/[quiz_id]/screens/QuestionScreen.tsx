import AccentInput from "@/components/ui/inputs/AccentInput/AccentInput";
import cl from "../styles.module.scss";
import FileUpload from "../components/FileUpload";
import AddSvg from "../assets/add.svg";
import RemoveSvg from "../assets/remove.svg";

export const QuestionScreen = () => {
  return (
    <div className={cl.questionContainer}>
      <AccentInput placeholder="Введите вопрос" />
      <FileUpload />
      <div className={cl.questionInputGroup}>
        <div className={cl.questionInput}>
          <input placeholder="Введите ответ" maxLength={25} />
        </div>
        <div className={cl.questionInput}>
          <input placeholder="Введите ответ" maxLength={25} />
        </div>
        <div className={cl.questionInput}>
          <RemoveSvg className={cl.deleteQuestion} />
          <input placeholder="Введите ответ" maxLength={25} />
        </div>
        <div className={cl.questionInput}>
          <AddSvg />
        </div>
      </div>
    </div>
  );
};
