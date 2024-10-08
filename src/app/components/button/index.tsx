import React from "react";
import Link from "next/link";

interface ButtonProps {
  style: string;
  value: string;
  link: boolean;
  href: string;
  newTab: boolean;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({
  style,
  value,
  link,
  href,
  newTab,
  onClick,
}) => {
  return (
    <>
      {link ? (
        <a
          className={`${
            style === "primary"
              ? "bg-primary-color text-white "
              : "bg-white text-primary-color border-primary-color "
          } p-4 rounded-lg block text-xl border`}
          href={href}
          target={newTab ? "_blank" : undefined}
        >
          {value}
        </a>
      ) : (
        <span
          className={`${
            style === "primary"
              ? "bg-primary-color text-white "
              : "bg-white text-primary-color border-primary-color "
          } p-4 rounded-lg block text-2xl border`}
          onClick={onClick}
        >
          {value}
        </span>
      )}
    </>
  );
};

export default Button;
