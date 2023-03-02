"use client";
import { FC, Ref, useRef } from "react";
import { PinField as ReactPinField } from "react-pin-field";
import cl from "./PinField.module.scss";

interface IProps {
  onComplete: (pin: string) => void;
  disabled?: boolean;
  innerRef?: any;
  error?: boolean;
  resolveError?: () => void;
}

const PinField: FC<IProps> = ({
  onComplete,
  disabled,
  innerRef,
  error,
  resolveError,
}) => {
  return (
    <div className={cl.pinFieldWrapper}>
      <ReactPinField
        ref={innerRef}
        className={`${cl.pinField} ${error ? cl.error : ""}`}
        disabled={disabled}
        onChange={() => {
          error && resolveError && resolveError();
        }}
        onComplete={onComplete}
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
