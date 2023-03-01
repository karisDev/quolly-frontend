"use client";
import React, { useState } from "react";
import cl from "./IconInput.module.scss";

interface IProps {
  icon: JSX.Element;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = ({ icon, placeholder, type, value, onChange }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className={`${cl.iconInputWrapper} ${isFocused ? cl.focused : ""}`}>
      <div className={cl.iconContainer}>{icon}</div>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default IconInput;
