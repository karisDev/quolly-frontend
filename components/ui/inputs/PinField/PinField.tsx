"use client";
import { FC, Ref, useRef } from "react";
import { PinField as ReactPinField } from "react-pin-field";
import cl from "./PinField.module.scss";

interface IProps {
  onComplete?: (pin: string) => void;
  disabled?: boolean;
  innerRef?: any;
}

const PinField: FC<IProps> = ({ onComplete, disabled, innerRef }) => {
  return (
    <div className={cl.pinFieldWrapper}>
      <ReactPinField
        ref={innerRef}
        disabled={disabled}
        onComplete={onComplete}
        className={cl.pinField}
        autoFocus
        length={6}
        validate="0123456789"
        inputMode="numeric"
        placeholder="_"
      />
    </div>
  );
};

export default PinField;
