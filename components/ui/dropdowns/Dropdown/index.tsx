"use client";
import cl from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import FilledChevron from "./assets/filled_chevron.svg";

const useClickOutside = (ref: any, callback: () => void) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

interface Props {
  labelIcon: JSX.Element;
  labelText: string;
  items: string[];
  value: string;
  onClick: (item: string) => void;
}

const Dropdown: React.FC<Props> = ({
  labelIcon,
  labelText,
  items,
  value,
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsExpanded(false);
  });

  return (
    <div
      ref={ref}
      className={`${cl.dropdown} ${isExpanded ? cl.expanded : ""}`}
    >
      <div className={cl.dropdown__label}>
        {labelIcon} {labelText}
      </div>
      <div
        className={cl.dropdown__value}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {value}
        <FilledChevron className={cl.chevron} />
      </div>
      <div className={cl.dropdown__items}>
        {items.map((item, index) => (
          <div
            className={cl.dropdown__item}
            key={index}
            onClick={() => {
              onClick(item);
              setIsExpanded(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
