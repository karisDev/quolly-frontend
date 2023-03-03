import cl from "./CircularProgress.module.scss";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FC } from "react";

interface IProps {
  maxValue?: number;
  value: number;
  text: string | number;
  hurryAlert?: boolean;
  strokeWidth?: number;
  size?: number;
}

const CircularProgress: FC<IProps> = ({
  maxValue,
  value,
  text,
  hurryAlert,
  strokeWidth,
  size = 200,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`${cl.circularProgress} ${hurryAlert ? cl.hurryAlert : ""}`}
    >
      <CircularProgressbar
        styles={buildStyles({
          pathTransition: "linear",
          pathTransitionDuration: 1,
          textSize: 24,
        })}
        value={value - 1}
        maxValue={maxValue && maxValue - 1}
        text={`${text}`}
        strokeWidth={strokeWidth}
      />
    </div>
  );
};

export default CircularProgress;
