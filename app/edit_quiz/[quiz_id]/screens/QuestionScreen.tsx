import AccentInput from "@/components/ui/inputs/AccentInput/AccentInput";
import cl from "../styles.module.scss";
import FileUpload from "../components/FileUpload";
import AddSvg from "../assets/add.svg";
import RemoveSvg from "../assets/remove.svg";
import { FC } from "react";
import { PropsWithVm } from "../page";
import { observer } from "mobx-react-lite";

const QuestionScreen: FC<PropsWithVm> = (x) => {
  if (!x.vm || !x.vm.currentQuiz) return <></>;
  const id = x.vm.selectedQuestionId;
  const question = x.vm.currentQuiz.questions.find((v) => v.id === id);

  return (
    <div className={cl.questionContainer}>
      <AccentInput
        placeholder="Введите вопрос"
        value={question!.text}
        onChange={(e) => {
          question!.text = e.target.value;
        }}
      />
      <FileUpload />
      {question!.type === "default" && (
        <div className={cl.questionInputGroup}>
          <div className={cl.questionInput}>
            <input
              value={question!.answers[0].text}
              onChange={(e) => {
                question!.answers[0].text = e.target.value;
              }}
              placeholder="Правильный ответ"
              maxLength={25}
            />
          </div>
          <div className={cl.questionInput}>
            <input
              value={question!.answers[1].text}
              onChange={(e) => {
                question!.answers[1].text = e.target.value;
              }}
              placeholder="Неверный ответ"
              maxLength={25}
            />
          </div>
          <div className={cl.questionInput}>
            <input
              value={question!.answers[2].text}
              onChange={(e) => {
                question!.answers[2].text = e.target.value;
              }}
              placeholder="Неверный ответ"
              maxLength={25}
            />
          </div>
          <div className={cl.questionInput}>
            <input
              value={question!.answers[3].text}
              onChange={(e) => {
                question!.answers[3].text = e.target.value;
              }}
              placeholder="Неверный ответ"
              maxLength={25}
            />
          </div>
        </div>
      )}
      {question!.type === "true/false" && (
        <div className={`${cl.questionInputGroup} ${cl.trueFalse}`}>
          <div
            className={cl.questionInput}
            style={{ backgroundColor: "var(--color-success)" }}
          >
            <input
              value={question!.answers[0].text}
              onChange={(e) => {
                question!.answers[0].text = e.target.value;
              }}
              placeholder="Верный ответ"
              maxLength={25}
            />
          </div>
          <div
            className={cl.questionInput}
            style={{ backgroundColor: "var(--color-error)" }}
          >
            <input
              value={question!.answers[1].text}
              onChange={(e) => {
                question!.answers[1].text = e.target.value;
              }}
              placeholder="Неверный ответ"
              maxLength={25}
            />
          </div>
        </div>
      )}
      {/* <div className={cl.questionInput}>
          <RemoveSvg className={cl.deleteQuestion} />
          <input placeholder="Введите ответ" maxLength={25} />
        </div>
        <div className={cl.questionInput}>
          <AddSvg />
        </div> */}
    </div>
  );
};

export default observer(QuestionScreen);
